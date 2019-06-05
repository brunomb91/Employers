from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import EmployersSerializer, EmployersMiniSerializer
from .models import Employers

class EmployersViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Employers.objects.all()
    serializer_class = EmployersSerializer

    def list(self, request, *args, **kwargs):
        employers = Employers.objects.all()
        serializer = EmployersSerializer(employers, many = True)
        return Response(serializer.data)
