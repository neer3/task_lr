from django.db import models

class FormDetails(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=15)
    addressLine1 = models.CharField(max_length=200)
    addressLine2 = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    pin = models.PositiveIntegerField(default=0)
    state = models.CharField(max_length=100)