from rest_framework import serializers
from .models import ReactModel


class ReactModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReactModel
        fields = ['title','content']
