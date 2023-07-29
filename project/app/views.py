from django.shortcuts import render
from rest_framework import generics
from .models import ReactModel
from .serializers import ReactModelSerializer
from rest_framework.response import Response
# Create your views here.

class RestAPIView(generics.ListCreateAPIView):
    queryset = ReactModel.objects.all()
    serializer_class = ReactModelSerializer

urlRestAPIView = RestAPIView.as_view()

