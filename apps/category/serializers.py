from rest_framework import serializers
from .models import *

class CategorySerializar(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=[
            'id',
            'name',
            'slug',
            'views',
        ]