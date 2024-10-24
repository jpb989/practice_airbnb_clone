from django.urls import path
from dj_rest_auth.jwt_auth import get_refresh_view
from .views import CustomRegisterView
from . import api
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns = [
    path("register/", CustomRegisterView.as_view(), name="rest_register"),
    path("login/", LoginView.as_view(), name="rest_login"),
    path("logout/", LogoutView.as_view(), name="rest_logout"),
    path("myreservations/", api.reservations_list, name="api_reservations_list"),
    path("<uuid:pk>/", api.landlord_detail, name="api_landlord_detail"),
]
