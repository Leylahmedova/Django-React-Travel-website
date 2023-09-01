from django.db import models
from django.contrib.auth.models import User,AbstractBaseUser, BaseUserManager
import uuid

# Create your models here.
class Product(models.Model):
    airline = models.CharField(max_length=100)
    price = models.FloatField()
    rating = models.FloatField()
    airportImg = models.URLField()
    image = models.URLField()
    passengerClass = models.CharField(max_length=100)
    reviewQuality = models.CharField(max_length=40)
    fromTo = models.CharField(max_length=100)
    departTime = models.CharField(max_length=100)
    departDate = models.DateField() 
    arrivalTime = models.CharField(max_length=100)
    durationstring = models.CharField(max_length=100)
    reviewCount = models.IntegerField()  
    returnDate = models.DateField() 
    froms = models.CharField(max_length=100) 
    to = models.CharField(max_length=100)
 
class BasketItem(models.Model):
    id=models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

class FavoritItem(models.Model):
    id=models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

class Hotel(models.Model):
    type = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    destination = models.CharField(max_length=100)
    price = models.FloatField()
    rating = models.FloatField()
    amenities = models.JSONField()
    reviewCount = models.IntegerField()
    reviewQuality = models.CharField(max_length=100)
    freebies =  models.JSONField()
    checkIn = models.DateField()
    checkOut = models.DateField()
    roomsGuests = models.CharField(max_length=100)
    image = models.URLField()
    room1price = models.DecimalField(max_digits=10, decimal_places=2)
    room2price = models.DecimalField(max_digits=10, decimal_places=2)
    room3price = models.DecimalField(max_digits=10, decimal_places=2)
    room4price = models.DecimalField(max_digits=10, decimal_places=2)
    overview = models.TextField()
    iframe = models.URLField(max_length=400)
    staysImages = models.JSONField()
    
    def _str_(self):
        return self.name
class HotelBasketItem(models.Model):
    id=models.AutoField(primary_key=True)
    product = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

class HotelFavoritItem(models.Model):
    id=models.AutoField(primary_key=True)
    product = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    
class Blog(models.Model):
     title=models.TextField()
     created_date=models.CharField(max_length=40)
     image=models.URLField()
     paragraf=models.TextField()
     def _str_(self):
       return self.title

    

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    is_verified = models.BooleanField(default=False)
    verification_code = models.UUIDField(default=uuid.uuid4, editable=False)
    password = models.CharField(max_length=128)
    reset_code = models.CharField(max_length=4, blank=True, null=True)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

class AdminUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_verified = models.BooleanField(default=False)
    is_admin_verified = models.BooleanField(default=False)
    email = models.EmailField(max_length=255, unique=True)

    def __str__(self):
        return self.user.email

class Review(models.Model):
    title = models.CharField(max_length=100)
    rating = models.PositiveIntegerField()  
    comment = models.TextField()
    created_at = models.DateField(auto_now_add=True) 
    likes = models.PositiveIntegerField(default=0) 
    dislikes = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.title
