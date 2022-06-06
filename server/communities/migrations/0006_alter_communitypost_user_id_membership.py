# Generated by Django 4.0.5 on 2022-06-05 20:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('communities', '0005_rename_post_communitypost'),
    ]

    operations = [
        migrations.AlterField(
            model_name='communitypost',
            name='user_id',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Membership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_role', models.CharField(choices=[('Admin', 'Admin'), ('Member', 'Member')], max_length=50)),
                ('community_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='communities.community')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
