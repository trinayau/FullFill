from django.urls import path
from .views import newsletterSignup
app_name = 'newsletter'

urlpatterns = [
    path('signup/', newsletterSignup.as_view(), name='newsletter')
]
