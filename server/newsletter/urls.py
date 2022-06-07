from django.urls import path
from .views import newsletterSignup

urlPattern = {
    path('signup', newsletterSignup.as_view())
}
