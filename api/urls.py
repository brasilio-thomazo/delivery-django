from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('client', views.ClientsViewSet)
router.register('product', views.ProductsViewSet)
router.register('product-type', viewset=views.ProductTypesViewSet)
router.register('product-category', viewset=views.ProductCategoriesViewSet)

urlpatterns = [
    path('', include(router.urls))
]
