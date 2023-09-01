# blog/serializers.py
from rest_framework import serializers
from .models import Product,Blog,Review,Hotel,BasketItem,HotelBasketItem,FavoritItem,HotelFavoritItem,User, AdminUser
#ticket
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
#ticketbasket
class BasketItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = BasketItem
        fields = ("id","quantity","product")
#ticketfavorit
class TicketFavoritSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta:
        model = FavoritItem
        fields = ("id","quantity","product")
#hotel
class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'
#hotelfavorit
class HotelFavoritItemSerializer(serializers.ModelSerializer):
    product = HotelSerializer()
    class Meta:
        model = HotelFavoritItem
        fields = ("id","quantity","product")
#hotelbasket
class HotelBasketItemSerializer(serializers.ModelSerializer):
    product = HotelSerializer()
    class Meta:
        model = HotelBasketItem
        fields = ("id","quantity","product")

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

        
#User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = '__all__'
        

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'title', 'rating', 'comment', 'created_at', 'likes', 'dislikes')

