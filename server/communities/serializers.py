from dataclasses import field
from rest_framework import serializers
from .models import Community, CommunityPost, FavRecipe, Membership, Comment
from users.serializers import CustomUserSerializer
class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('__all__')
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

class CommentSerializer(serializers.ModelSerializer):

    creator = CustomUserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('__all__')
    def create(self, validated_data):
        instance = Comment(**validated_data)
        instance.creator = self.context['request'].user
        instance.save()
        return instance


class FavRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavRecipe
        fields = "__all__"

    extra_kwargs = {'user': {'read_only': True}}
def create(self, validated_data):
        instance = FavRecipe(**validated_data)
        instance.user = self.context['request'].user
        instance.save()
        return instance
