from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('clients', views.index, name='clientes'),
    path('products', views.index, name='clientes')
]
