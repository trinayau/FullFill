from rest_framework import serializers
from .models import Community, CommunityPost

class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'title', 'description', 'creator')

class CommunityPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityPost
        fields = ('__all__')
