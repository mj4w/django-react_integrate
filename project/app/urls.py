from django.urls import path
from . import views


urlpatterns = [
    path('app/',views.urlRestAPIView, name='app'),
    path('app/<int:pk>/',views.urlRestDetailAPIView, name='detail'),
    path('app/<int:pk>/update/',views.urlRestUpdateAPIView, name='update'),
    path('app/<int:pk>/delete/',views.urlRestDeleteAPIView, name='delete'),

]