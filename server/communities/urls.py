from django.urls import path
from .views import CommunityList, CommunityPosts, CommunityDetail, community_posts, memberships, my_communities, allmemberships, usermemberships
app_name = 'community_api'

urlpatterns = [
    path('', CommunityList.as_view(), name='all_communities'),
    path('<int:pk>/', CommunityDetail.as_view(), name='community_detail'),
    path('posts/', CommunityPosts.as_view(), name='community_posts'),
    path('<int:pk>/posts/', community_posts, name="posts_by_community"),
    path('<int:pk>/memberships/', memberships, name="memberships_by_community"),
    path('mycommunities/', my_communities, name="my_communities"),
    path('usermemberships/<int:pk>/', usermemberships, name="user_memberships"),
]
