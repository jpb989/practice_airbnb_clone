from django.shortcuts import render
from .serializers import CustomRegisterSerializer
from dj_rest_auth.registration.views import RegisterView
# Create your views here.

class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer