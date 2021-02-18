from django.shortcuts import render
from . import serializers, models
from rest_framework import viewsets


class ClientsViewSet(viewsets.ModelViewSet):
    queryset = models.Clients.objects.all()
    serializer_class = serializers.ClientSerializer
