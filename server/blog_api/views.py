from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer

#be able to list and create ites
class PostList(generics.ListCreateAPIView):
    # go into post db and get all objects that are flagged as published
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
