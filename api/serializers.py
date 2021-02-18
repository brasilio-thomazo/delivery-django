from django.db.models import fields
from . import models
from rest_framework import serializers


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Clients
        fields = '__all__'
