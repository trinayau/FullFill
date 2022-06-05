from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()
# Create your models here.


class Community(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    description = models.TextField()
    location = models.CharField(max_length=50, null=True, blank=True)
    creator = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, editable=False)


    def __str__(self) -> str:
        return self.title

