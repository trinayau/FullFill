from django.db import models
# from django.contrib.auth.models import User
from django.conf import settings
from django.utils import timezone
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):
    # create new model manager
    # by default, instead of running objects.all when we query, we can run postobjects which will select only data with status of published only
    # dont need to filter out in our view data that isn't published- managing it in our model
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    # use slug to identify the post
    # cascade- delete user = delete posts
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(
        max_length=10,
        choices=options,
        default='published'
    )
    objects = models.Manager() #default manager
    postobjects = PostObjects() #custom manager


    class Meta:
        ordering = ('-published',)

    #dunder string method to return title
    def __str__(self):
        return self.title
