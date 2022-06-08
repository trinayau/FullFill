from rest_framework import generics
from .models import Community, CommunityPost, Membership
from .serializers import CommunitySerializer, CommunityPostSerializer, MembershipSerializer
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
    posts = CommunityPost.objects.filter(community=pk)
    serializer = CommunityPostSerializer(posts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def my_communities(request):
    communities = Community.objects.filter(members__user=request.user)
    serializer = CommunitySerializer(communities, many=True) 
    return Response(serializer.data)
    # communities = Membership.objects.filter(user=request.user)
    # for community in communities:
    #     community.member = Membership.objects.filter(user_id=request.user, community_id=community.id)[0]

    # data = {
    #     'communities': communities
    # }
    # return Response(data)

@api_view(['GET', 'POST'])
def memberships(request, pk):
    memberships = Membership.objects.filter(community=pk, user=request.user)
   
    if request.method == 'POST':
        if len(memberships) == 0:
            community = Community.objects.get(id=pk)
            member = Membership(user=request.user, community=community, member_role='Member')
            member.save()
            return Response({'message': f'You are now member of {community.title}'})
        else:
            
            return Response({'message': 'You already have membership of this community'})
    
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def allmemberships(request):
    memberships = Membership.objects.all()
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def usermemberships(request, pk):
    memberships = Membership.objects.filter(user=pk)
    serializer = MembershipSerializer(memberships, many=True)
    return Response(serializer.data)
