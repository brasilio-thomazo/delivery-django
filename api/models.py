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
