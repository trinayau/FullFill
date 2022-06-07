from rest_framework import serializers
from .models import Community, CommunityPost, Membership
from users.serializers import CustomUserSerializer
class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'title', 'description', 'creator')
    def create(self, validated_data):
        instance = Community(**validated_data)
        instance.creator = self.context['request'].user
        instance.save()
        member = Membership(user=self.context['request'].user, community=instance, member_role='Admin')
        member.save()
        return instance

class CommunityPostSerializer(serializers.ModelSerializer):

    creator = CustomUserSerializer(read_only=True)
    class Meta:
        model = CommunityPost
        fields = ('__all__')
    def create(self, validated_data):
        instance = CommunityPost(**validated_data)
        instance.creator = self.context['request'].user
        instance.save()
        return instance


class MembershipSerializer(serializers.ModelSerializer):

    creator = CustomUserSerializer(read_only=True)
    class Meta:
        model = Membership
        fields = ('__all__')
    def create(self, validated_data):
        instance = Membership(**validated_data)
        instance.creator = self.context['request'].user
        instance.save()
        return instance
