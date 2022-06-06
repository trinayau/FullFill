from rest_framework import generics
from .models import Community
from .serializers import CommunitySerializer
# Create your views here.
class CommunityList(generics.ListCreateAPIView):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer

