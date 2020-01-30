from django.shortcuts import render
from django.db.models import Q
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import formSerializer, form2Serializer
from .models import FormDetails
from rest_framework.response import Response


class formViewSet(viewsets.ModelViewSet):
    query = FormDetails.objects.all().order_by('date_joined')
    serializer_class = formSerializer

    def list(self, request, *args, **kwargs):
        temp = FormDetails.objects.all()
        serial = form2Serializer(temp,many=True)
        return Response(serial.data)