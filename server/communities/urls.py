from django.urls import path
from .views import CommunityList
app_name = 'community_api'

urlpatterns = [
    path('', CommunityList.as_view(), name='communities'),
]
