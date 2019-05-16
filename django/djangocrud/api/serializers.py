from django.contrib.auth.models import User, Group
from rest_framework import serializers
#from .models import Movie
from .models import Employers

# class MovieSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('id', 'title', 'desc', 'year')
#
# class MovieMiniSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movie
#         fields = ('id', 'title')

class EmployersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employers
        fields = ('id', 'name', 'address', 'salary', 'badgeNumber', 'dateJoined')

class EmployersMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employers
        fields = ('id', 'name', 'address', 'salary')
