from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.Community)
class CommunityAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.creator = request.user
        super(CommunityAdmin, self).save_model(request, obj, form, change)

    
    list_display = ("id", 'title', "creator")
