from django.db import models


class Clients(models.Model):
    name = models.CharField(max_length=125, null=False, blank=False)
    phone = models.CharField(max_length=30, null=False, blank=False)
    address = models.CharField(max_length=255, null=False, blank=False)
    addr_number = models.IntegerField(null=False, blank=False)
    addr_complement = models.CharField(max_length=100, null=True)
    registred = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.DateTimeField(null=True)

    class Meta:
        unique_together = ('name', 'phone')


class ProductTypes(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    registred = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.DateTimeField(null=True)


class ProductCategories(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    registred = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.DateTimeField(null=True)


class Products(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    p_type = models.ForeignKey(ProductTypes, on_delete=models.CASCADE)
    p_category = models.ForeignKey(
        ProductCategories, on_delete=models.CASCADE)
    description = models.CharField(max_length=255, null=True, blank=True)
    price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, default=0.1)
    cost = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, default=0)
    registred = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    deleted = models.DateTimeField(null=True)

    class Meta:
        unique_together = ('name', 'p_type', 'p_category')
