from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework_simplejwt.tokens import AccessToken
from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationsListSerializer
from useraccount.models import User

@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    # Auth
    try:
        token = request.META["HTTP_AUTHORIZATION"].split("Bearer ")[1]
        token = AccessToken(token)
        user_id = token.payload["user_id"]
        user = User.objects.get(pk=user_id)
    except Exception as e:
        user = None
    
    #
    favourites = []
    properties = Property.objects.all()

    # Filter
    
    is_favourites = request.GET.get("is_favourites", "")
    landlord_id = request.GET.get("landlord_id", "")

    if landlord_id:
        properties = properties.filter(landlord_id=landlord_id)

    if is_favourites:
        properties = properties.filter(favorited__in=[user])

    #
    # Favourite
    if user:
        for property in properties:
            if user in property.favorited.all():
                favourites.append(property.id)
    #

    serializer = PropertiesListSerializer(properties, many=True)
    return JsonResponse({
        "data": serializer.data,
        "favourites": favourites
    })


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    property = Property.objects.get(pk=pk)

    serializer = PropertiesDetailSerializer(property, many=False)
    return JsonResponse(serializer.data, status=HTTP_200_OK)


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def property_reservations(request, pk):
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()

    serializer = ReservationsListSerializer(reservations, many=True)
    return JsonResponse(serializer.data, status=HTTP_200_OK, safe=False)


@api_view(["POST", "FILES"])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()

        return JsonResponse({"success": True})
    else:
        print("error", form.errors, form.non_field_errors)
        return JsonResponse({"errors": form.errors.as_json()}, status=HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def book_property(request, pk):
    try:
        start_date = request.POST.get("start_date", "")
        end_date = request.POST.get("end_date", "")
        number_of_nights = request.POST.get("number_of_nights", "")
        total_price = request.POST.get("total_price", "")
        guests = request.POST.get("guests", "")

        property = Property.objects.get(pk=pk)

        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )
        return JsonResponse({"success": True})
        
    except Exception as e:
        print("Error: ",e)
        return JsonResponse({"success": False})

@api_view(["POST"])
def toggle_favourite(request,  pk):
    property = Property.objects.get(pk=pk)

    if request.user in property.favorited.all():
        property.favorited.remove(request.user)
        return JsonResponse({"is_favourite": False})
    else:
        property.favorited.add(request.user)
        return JsonResponse({"is_favourite": True})