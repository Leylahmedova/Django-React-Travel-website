from django.urls import path
from . import views

urlpatterns = [
    # ... other URLs ...
    path('add_card/', views.add_card, name='add_card'),
     path('get_payments/', views.get_payments, name='get_payments'),
]
