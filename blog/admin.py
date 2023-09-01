# my_blog_project/blog/admin.py
from django.contrib import admin
from .models import Product,Blog,Review,Hotel,BasketItem,HotelBasketItem,FavoritItem,HotelFavoritItem,Contact,User,AdminUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

admin.site.register(Product)
admin.site.register(Blog)

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'rating', 'comment' ,"created_at")

admin.site.register(Review, ReviewAdmin)

admin.site.register(Hotel)
admin.site.register(BasketItem)
admin.site.register(HotelBasketItem)
admin.site.register(FavoritItem)
admin.site.register(HotelFavoritItem)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
    

class CustomUserAdmin(BaseUserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_verified')
    
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(User, CustomUserAdmin)
admin.site.register(AdminUser)
