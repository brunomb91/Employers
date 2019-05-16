from django.db import models

class Employers(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    salary = models.FloatField()
    badgeNumber = models.IntegerField()
    dateJoined = models.DateField()
