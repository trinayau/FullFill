from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.Community)
class CommunityAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.creator = request.user
        super(CommunityAdmin, self).save_model(request, obj, form, change)

    
    list_display = ("id", 'title', "creator")

@admin.register(models.CommunityPost)
class CommunityPostAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.user_id = request.user
        super(CommunityPostAdmin, self).save_model(request, obj, form, change)

    
    list_display = ("id", 'title')

@admin.register(models.Membership)
class MembershipAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.user_id = request.user
        super(MembershipAdmin, self).save_model(request, obj, form, change)
    list_display = ("id", "user_id", "community_id", "member_role")

@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.name = request.user
        obj.username = request.user.user_name
        super(CommentAdmin, self).save_model(request, obj, form, change)
    list_display = ("id", "name", "post")

@admin.register(models.FavRecipe)
class RecipeAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        obj.user = request.user
        super(RecipeAdmin, self).save_model(request, obj, form, change)
    list_display = ("id", "user", "recipe_id")
