# Generated by Django 4.0.5 on 2022-06-07 09:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('communities', '0011_rename_user_communitypost_creator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='communitypost',
            name='creator',
            field=models.ForeignKey(blank=True, editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
