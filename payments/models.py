from django.db import models

class Payment(models.Model):
    card_number = models.CharField(max_length=20)
    # cardholder_name = models.CharField(max_length=100)
    expiration_date = models.CharField(max_length=7)  # Using CharField for expdate in MM/YY format
    cvc = models.CharField(max_length=4)
    name_on_card = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    hotelprice=models.FloatField()
    type=models.CharField(max_length=60)
  

   
