from django.shortcuts import render
from . import serializers, models
from rest_framework import viewsets


class ClientsViewSet(viewsets.ModelViewSet):
    queryset = models.Clients.objects.all()
    serializer_class = serializers.ClientSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = models.Products.objects.all()
    serializer_class = serializers.ProductSerializer


class ProductTypesViewSet(viewsets.ModelViewSet):
    queryset = models.ProductTypes.objects.all()
    serializer_class = serializers.ProductTypeSerializer


class ProductCategoriesViewSet(viewsets.ModelViewSet):
    queryset = models.ProductCategories.objects.all()
    serializer_class = serializers.ProductCategorySerializer
