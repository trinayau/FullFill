from django.contrib.auth.models import User
from django.test import  TestCase, Client
from django.urls import reverse

class TestRoutes(TestCase):

    def test_post_route(self):

        c = Client()

        data = { "first_name" : "Bartholomew",
                "email": "bartl@bee.com",
                "agree": True }

        res = c.post("/api/newsletter/signup/", data=data)

        print(res)
        assert res.status_code == 200
