from django.contrib.auth.models import User
from django.test import  TestCase
from django.urls import reverse

from .models import NewUser, CustomAccountManager


# Create your tests here.


class UserTestCase(TestCase):

    def setUp(self):
        u = NewUser.objects.create(first_name="trina", email="a@a.com", user_name="trinaYau")
        u.save()

    def test_user_has_name(self):
        u = NewUser.objects.get(first_name="trina")
        self.assertEqual(u.first_name, "trina")

    def test_user_has_username(self):
        u = NewUser.objects.get(user_name="trinaYau")
        self.assertEqual(u.user_name, "trinaYau")

    def test_user_has_email(self):
        u = NewUser.objects.get(email="a@a.com")
        self.assertEqual(u.email, "a@a.com")
