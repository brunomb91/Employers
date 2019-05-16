from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Employers

class EmployersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employers
        fields = ('id', 'name', 'address', 'salary', 'badgeNumber', 'dateJoined')

class EmployersMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employers
        fields = ('id', 'name', 'address', 'salary')
