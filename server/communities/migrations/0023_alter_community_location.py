# Generated by Django 4.0.5 on 2022-06-09 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0022_favrecipe_category_favrecipe_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='location',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
