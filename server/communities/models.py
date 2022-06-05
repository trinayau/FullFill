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

class CommunityPost(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, editable=False)
    community_id = models.ForeignKey(Community, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title

ROLE_CHOICES =(
    ("Admin","Admin"),
    ("Member", "Member")
)
class Membership(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    community_id = models.ForeignKey(Community, on_delete=models.SET_NULL, null=True)
    member_role = models.CharField(max_length=50, choices=ROLE_CHOICES)

    def __str__(self):
        return f'{self.user_id}'
