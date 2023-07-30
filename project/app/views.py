from django.shortcuts import render
from rest_framework import generics
from .models import ReactModel
from .serializers import ReactModelSerializer
from rest_framework.response import Response
# Create your views here.

class RestAPIView(generics.ListCreateAPIView):
    queryset = ReactModel.objects.all()
    serializer_class = ReactModelSerializer

    def perform_create(self, serializer):
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content is None:
            content = title
        serializer.save(content=content)

urlRestAPIView = RestAPIView.as_view()


class RestDetailAPIView(generics.RetrieveAPIView):
    queryset = ReactModel.objects.all()
    serializer_class = ReactModelSerializer


urlRestDetailAPIView = RestDetailAPIView.as_view()


class RestUpdateAPIView(generics.UpdateAPIView):
    queryset = ReactModel.objects.all()
    serializer_class = ReactModelSerializer
    lookup_field = "pk"

    def perform_update(self,serializer):
        instance = serializer.save()
        if not instance.content:
            instance.content = instance.title

urlRestUpdateAPIView = RestUpdateAPIView.as_view()

