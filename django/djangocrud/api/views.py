from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import EmployersSerializer, EmployersMiniSerializer
from .models import Employers
from django.shortcuts import render

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

def post_detail(request):
    return render(request, 'api/show.html', {})
