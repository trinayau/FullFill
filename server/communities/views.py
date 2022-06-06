from rest_framework import generics
from .models import Community, CommunityPost, Membership
from .serializers import CommunitySerializer, CommunityPostSerializer
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
class CommunityList(generics.ListCreateAPIView):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer

class CommunityPosts(generics.ListCreateAPIView):
    queryset = CommunityPost.objects.all()
    serializer_class = CommunityPostSerializer

class CommunityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer

@api_view(['GET'])
def community_posts(request, pk):
    posts = CommunityPost.objects.filter(community_id=pk)
    serializer = CommunityPostSerializer(posts, many=True)
    return Response(serializer.data)

@login_required
def my_communities(request):
    communities = Community.objects.filter(membership__user_id=request.user)
    for community in communities:
        community.member = Membership.objects.filter(user_id=request.user, community_id=community.id)[0]

    data = {
        'communities': communities
    }
    return Response(data)
