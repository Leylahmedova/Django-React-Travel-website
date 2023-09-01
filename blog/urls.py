from django.urls import path
from blog.views import product_list_view,product_create_view,product_detail_view,blog_list_view,blog_list_view2,blog_detail_view,hotel_list_view,hotel_detail_view,remove_item_from_basket,remove_item_from_basketHotel,ticketFavorit,remove_item_from_ticketFavorit,hotelfavorit,hotel_create_view,remove_item_from_hotelFavorit,blog_create_view,review_list,review_create,review_like,review_dislike

from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns=[
    #tickets
    path("list/",product_list_view,name="product_list"),
    path('list/<int:id>/', product_detail_view, name='product_detail_view'),
    path("create/",product_create_view,name="product_create"),
    #ticketsBasket
    path('basket/', views.basket, name='basket'),
    path('basket/<int:item_id>/', remove_item_from_basket, name='remove_item_from_basket'),
    #ticketFavorit
    path('ticketfavorit/', views.ticketFavorit, name='ticket_favorit'),
    path('ticketfavorit/<int:item_id>/', remove_item_from_ticketFavorit, name='remove_item_from_ticketFavorit'),
    #hotelsBasket
    path('hotelbasket/', views.hotelbasket, name='hotel_basket'),
    path('hotelbasket/<int:item_id>/', remove_item_from_basketHotel, name='remove_item_from_hotelbasket'),
    #hotels
    path('hotels/',hotel_list_view, name='hotel_list'),
    path('hotels/<int:id>/',hotel_detail_view,name="hotel_detail_view"),
    path("hotelcreate/",hotel_create_view,name="hotel_create"),
    #hotelsFavorit
    path('hotelfavorit/',views.hotelfavorit, name='hotel_favorit'),
    path('hotelfavorit/<int:item_id>/',remove_item_from_hotelFavorit,name="remove_item_from_hotelFavorit"),
    #--------
  
    #blogs
    path("bloglist",blog_list_view,name="blog_list"),
    path("bloglist2",blog_list_view2,name="blog_list2"),
    path("bloglist/<id>/",blog_detail_view,name="blog_detail"),
     #reviews
    path('reviews/', review_list, name='review-list'),
    path('reviewscreate/', review_create, name='review-create'),
    path('reviews/<int:review_id>/like/', review_like, name='review-like'),
    path('reviews/<int:review_id>/dislike/',review_dislike, name='review-dislike'),
    path('blogcreate/', blog_create_view, name='blog-create'),

    
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
