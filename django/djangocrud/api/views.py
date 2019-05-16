from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import EmployersSerializer, EmployersMiniSerializer
from .models import Employers
#from .serializers import MovieSerializer, MovieMiniSerializer
#from .models import Movie

# class MovieViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer
#
#     def list(self, request, *args, **kwargs):
#         movies = Movie.objects.all()
#         serializer = MovieMiniSerializer(movies, many = True)
#         return Response(serializer.data)

class EmployersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Employers.objects.all()
    serializer_class = EmployersSerializer

    def list(self, request, *args, **kwargs):
        employers = Employers.objects.all()
        serializer = EmployersMiniSerializer(employers, many = True)
        return Response(serializer.data)
