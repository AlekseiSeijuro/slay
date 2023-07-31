from django.db import models

class Stat(models.Model):
    title=models.CharField(max_length=30)
    total=models.IntegerField()
    bests=models.IntegerField()

    def __str__(self):
        return self.title
# Create your models here.
