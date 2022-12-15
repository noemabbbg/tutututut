from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)



class title(models.Model):
    name = models.CharField(max_length=45, default=None)
    pg = models.IntegerField(blank=True, null=True, default=None)
    release = models.IntegerField(blank=True, null=True, default=None)
    price = models.IntegerField(blank=True, null=True, default=None)





    def __str__(self):
        return self.title
