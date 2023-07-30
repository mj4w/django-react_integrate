from django.urls import path
from . import views


urlpatterns = [
    path('app/',views.urlRestAPIView, name='app'),
    path('app/<int:pk>/',views.urlRestDetailAPIView, name='detail'),
]