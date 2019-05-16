from django.db import models

# class Movie(models.Model):
#     title = models.CharField(max_length=32)
#     desc = models.CharField(max_length=256)
#     year = models.IntegerField()

class Employers(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    salary = models.FloatField()
    badgeNumber = models.IntegerField()
    dateJoined = models.DateField()
