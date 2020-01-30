from rest_framework import serializers
from .models import FormDetails

class formSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormDetails
        fields = ['id', 'firstName', 'lastName', 'email', 'phone', 'addressLine1', 
        'addressLine2', 'city', 'pin', 'state']


class form2Serializer(serializers.ModelSerializer):
    class Meta:
        model = FormDetails
        fields = ('id', 'firstName', 'lastName', 'email', 'phone', 'addressLine1', 
        'addressLine2', 'city', 'pin', 'state')