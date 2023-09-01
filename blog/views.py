from django.shortcuts import render,get_object_or_404
from rest_framework.decorators import api_view, permission_classes,  authentication_classes
from rest_framework.response import Response
from .models import Product,Blog,Review,Hotel,BasketItem,HotelBasketItem,FavoritItem,HotelFavoritItem,Contact,User, AdminUser
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import ProductSerializer,BlogSerializer,ReviewSerializer,HotelSerializer,BasketItemSerializer,HotelBasketItemSerializer,TicketFavoritSerializer,HotelFavoritItemSerializer,UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import update_session_auth_hash
from django.shortcuts import get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordChangeForm
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework import status
from django.contrib.auth.hashers import make_password ,check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
import json
import logging
import uuid
import random

# reviews/views.py
@api_view(["GET"])
def product_list_view(request):
    recipes=Product.objects.all()
    serializer=ProductSerializer(recipes,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def hotel_list_view(request):
    recipes=Hotel.objects.all()
    serializer=HotelSerializer(recipes,many=True)
    return Response(serializer.data)

@api_view(["POST"])
def product_create_view(request):
    serializer=ProductSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    print(request.data)
    return Response(serializer.data)


@api_view(["POST"])
def hotel_create_view(request):
    serializer=HotelSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    print(request.data)
    return Response(serializer.data)

@api_view(["GET"])
def product_detail_view(request,id):
    recipe=Product.objects.get(id=id)
    serializer=ProductSerializer(recipe)
    return Response(serializer.data)


@api_view(["GET"])
def hotel_detail_view(request,id):
    recipe=Hotel.objects.get(id=id)
    serializer=HotelSerializer(recipe)
    return Response(serializer.data)


@api_view(["GET"])
def blog_list_view(request):
    recipes=Blog.objects.all()
    p = Paginator(recipes, 3)  
    page_number = request.GET.get('page')
    try:
        blogs = p.get_page(page_number) 
    except PageNotAnInteger:   
        blogs = p.page(1)
    except EmptyPage:
        blogs = p.page(p.num_pages)

    serializer=BlogSerializer(blogs,many=True)
    return  Response(serializer.data)


@api_view(["GET"])
def blog_list_view2(request):
    recipes=Blog.objects.all()
    serializer=BlogSerializer(recipes,many=True)
    return Response(serializer.data)


@api_view(["GET"])
def blog_detail_view(request,id):
    recipe=Blog.objects.get(id=id)
    serializer=BlogSerializer(recipe)
    return Response(serializer.data)

@api_view(["POST"])
def blog_create_view(request):
    serializer=BlogSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    print(request.data)
    return Response(serializer.data)



#ticket basket      
@api_view(['GET', 'POST'])
def basket(request):
    if request.method == 'GET':
        basket_items = BasketItem.objects.all()
        serializer = BasketItemSerializer(basket_items, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=404)

        basket_item, created = BasketItem.objects.get_or_create(product=product)
        basket_item.quantity += int(quantity)
        basket_item.save()

        serializer = BasketItemSerializer(basket_item)
        return Response(serializer.data)

@api_view(['DELETE'])
def remove_item_from_basket(request, item_id):
    try:
       # basket_item = BasketItem.objects.get(pk=item_id)
       product=Product.objects.get(pk=item_id)
    except BasketItem.DoesNotExist:
        return Response({'error': 'Basket item not found'}, status=404)

    BasketItem.objects.filter(product=product).delete()

    return Response({'message': 'Basket item deleted successfully'}, status=204)



#hotelbasket  

@api_view(['GET', 'POST'])
def hotelbasket(request):
    if request.method == 'GET':
        basket_items = HotelBasketItem.objects.all()
        serializer = HotelBasketItemSerializer(basket_items, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        try:
            product = Hotel.objects.get(pk=product_id)
        except Hotel.DoesNotExist:
            return Response({'error': 'Product not found'}, status=404)

        basket_item, created = HotelBasketItem.objects.get_or_create(product=product)
        basket_item.quantity += int(quantity)
        basket_item.save()

        serializer = HotelBasketItemSerializer(basket_item)
        return Response(serializer.data)

@api_view(['DELETE'])
def remove_item_from_basketHotel(request, item_id):
    try:
       # basket_item = BasketItem.objects.get(pk=item_id)
       product=Hotel.objects.get(pk=item_id)
    except HotelBasketItem.DoesNotExist:
        return Response({'error': 'Basket item not found'}, status=404)

    HotelBasketItem.objects.filter(product=product).delete()

    return Response({'message': 'Basket item deleted successfully'}, status=204)

#ticketFAVORIT
@api_view(['GET', 'POST'])
def ticketFavorit(request):
    if request.method == 'GET':
        basket_items = FavoritItem.objects.all()
        serializer = TicketFavoritSerializer(basket_items, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=404)

        basket_item, created = FavoritItem.objects.get_or_create(product=product)
        basket_item.quantity += int(quantity)
        basket_item.save()

        serializer = TicketFavoritSerializer(basket_item)
        return Response(serializer.data)

@api_view(['DELETE'])
def remove_item_from_ticketFavorit(request, item_id):
    try:
       # basket_item = BasketItem.objects.get(pk=item_id)
       product=Product.objects.get(pk=item_id)
    except FavoritItem.DoesNotExist:
        return Response({'error': 'Basket item not found'}, status=404)

    FavoritItem.objects.filter(product=product).delete()

    return Response({'message': 'Basket item deleted successfully'}, status=204)


#hotelfavorit
@api_view(['GET', 'POST'])
def hotelfavorit(request):
    if request.method == 'GET':
        basket_items = HotelFavoritItem.objects.all()
        serializer = HotelFavoritItemSerializer(basket_items, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)

        try:
            product = Hotel.objects.get(pk=product_id)
        except Hotel.DoesNotExist:
            return Response({'error': 'Product not found'}, status=404)

        basket_item, created = HotelFavoritItem.objects.get_or_create(product=product)
        basket_item.quantity += int(quantity)
        basket_item.save()

        serializer = HotelFavoritItemSerializer(basket_item)
        return Response(serializer.data)

@api_view(['DELETE'])
def remove_item_from_hotelFavorit(request, item_id):
    try:
       # basket_item = BasketItem.objects.get(pk=item_id)
       product=Hotel.objects.get(pk=item_id)
    except HotelFavoritItem.DoesNotExist:
        return Response({'error': 'Basket item not found'}, status=404)

    HotelFavoritItem.objects.filter(product=product).delete()

    return Response({'message': 'Basket item deleted successfully'}, status=204)

#Contact

@csrf_exempt
def contact_view(request):
    if request.method == 'POST':
       
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data.'}, status=400)

        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not name or not email or not message:
            return JsonResponse({'error': 'All fields are required.'}, status=400)

        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({'error': 'Invalid email address.'}, status=400)

        try:
            contact = Contact(name=name, email=email, message=message)
            contact.save()

            subject = 'Teşekkürler!'
            message = f"Salam {name},\n\nƏlaqə məlumatınız uğurla yadda saxlanıldı. Biz ən qısa zamanda sizinlə əlaqə saxlayacağıq."
            from_email = settings.EMAIL_HOST_USER
            recipient_list = [email]

            try:
                send_mail(subject, message, from_email, recipient_list)
                return JsonResponse({'success': True})
            except Exception as e:
            
                logger = logging.getLogger('django')
                logger.error(f"An error occurred while sending the email: {e}")
                return JsonResponse({'error': 'An error occurred while sending the email.'}, status=500)
        except Exception as e:
          
            logger = logging.getLogger('django')
            logger.error(f"An error occurred while saving the contact: {e}")
            return JsonResponse({'error': 'An error occurred while saving the contact.'}, status=500)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=400)

#review
@api_view(['GET'])
def review_list(request):
    reviews = Review.objects.all()
    total_reviews = reviews.count()
    total_ratings = sum([review.rating for review in reviews])
    average_rating = total_ratings / total_reviews if total_reviews > 0 else 0

    serializer = ReviewSerializer(reviews, many=True)

    response_data = {
        'total_reviews': total_reviews,
        'average_rating': average_rating,
        'reviews': serializer.data
    }

    return Response(response_data)


@api_view([ 'POST'])
def review_create(request):   
    serializer = ReviewSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    print(request.data)
    return Response(serializer.data)

@api_view(['POST'])
def review_like(request, review_id):
    review = Review.objects.get(pk=review_id)
    review.likes += 1
    review.save()
    serializer = ReviewSerializer(review)
    return Response(serializer.data)

@api_view(['POST'])
def review_dislike(request, review_id):
    review = Review.objects.get(pk=review_id)
    review.dislikes += 1
    review.save()
    serializer = ReviewSerializer(review)
    return Response(serializer.data)

# login_register

def send_verification_email(email, verification_code):
    subject = 'Hesap Doğrulama'
    message = f'Hesabınızı doğrulamak için aşağıdaki bağlantıya tıklayın: http://localhost:8000/api/verify/{verification_code}/'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, from_email, recipient_list)

def send_confirmation_email(email):
    subject = 'Qeydiyat Təsdiqi'
    message = f'Siz uğurla qeydiyyatınızı tamamladınız. Təbriklər!'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, from_email, recipient_list)

def send_admin_confirmation_email(user_email, user_name):
    subject = 'User Registration Confirmation'
    message = f'A new user has successfully verified their account.\nUser Name: {user_name}\nUser Email: {user_email}'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [settings.EMAIL_HOST_USER]  # Replace with the admin's email address
    send_mail(subject, message, from_email, recipient_list)


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        password = request.data['password']
        confirmpassword = request.data['confirmpassword']

        if password != confirmpassword:
            return Response({'error': 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

        email = request.data['email']
        try:
            user = User.objects.get(email=email)
            return Response({'error': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            pass

        user = serializer.save(password=make_password(password))

       
        verification_code = str(uuid.uuid4())
        user.verification_code = verification_code
        user.is_verified = False  
        user.save()

        
        send_verification_email(user.email, verification_code)

        return Response({'message': 'Please check your email to verify your account.'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def verify_user(request, verification_code):
    try:
        
        user = User.objects.get(verification_code=verification_code)
        if not user.is_verified:
            user.is_verified = True
            user.save()

            admin_user, created = AdminUser.objects.get_or_create(user=user, email=user.email)

            
            send_confirmation_email(user.email)

            send_admin_confirmation_email(user.email, user.first_name)
            user_name = user.first_name[0].upper() + user.last_name[0].upper()
            full_name = user.first_name + ' ' + user.last_name 
            user_email = user.email
            response = redirect('/')
            response.set_cookie('user_name', user_name)
            response.set_cookie('full_name', full_name)
            response.set_cookie('user_email', user_email)
            return response
        else:
            return Response({'message': 'Account already verified. You can now log in.'}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'Invalid verification code or user does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = User.objects.get(email=email)
        if user.check_password(password) and user.is_verified:
            refresh = RefreshToken.for_user(user)

            response_data = {
                'access_token': str(refresh.access_token),
                'user_data': UserSerializer(user).data
            }

            return Response(response_data, status=status.HTTP_200_OK)
        elif user.check_password(password) and not user.is_verified:
            return Response({'error': 'Account not verified. Please check your email for verification.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'There was a problem logging in. Check your email and password or create an account.'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    



@api_view(['POST'])
@permission_classes([AllowAny])
def send_reset_code_email(request):
    email = request.data.get('email')
    user = User.objects.filter(email=email).first()

    if user:
        reset_code = str(random.randint(1000, 9999))  # Generate a random 4-digit code
        user.reset_code = reset_code
        user.save()

        subject = "Reset Password Code"
        message = f"Your reset code is: {reset_code}"
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [email]
        send_mail(subject, message, from_email, recipient_list)

        return Response({'message': 'Reset code sent successfully.'})
    else:
        return Response({'error': 'User not found.'}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def reset_password_with_code(request):
    email = request.data.get('email')
    reset_code = request.data.get('reset_code')
    new_password = request.data.get('new_password')

    user = User.objects.filter(email=email, reset_code=reset_code).first()

    if user:
        user.set_password(new_password)
        user.reset_code = None  # Reset the reset code after successful password reset
        user.save()
        return Response({'message': 'Password reset successful.'})
    else:
          return Response({'error': 'Invalid email or reset code.'}, status=400)


@api_view(['PUT'])
@permission_classes([AllowAny])
def update_profile(request):
    email = request.data.get('email')
    user = User.objects.filter(email=email).first()

    if not user:
        return Response({'error': 'User not found.'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()

        return Response({'message': 'Profile updated successfully.'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_password(request):
    email = request.data.get('email')
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')

    user = User.objects.filter(email=email).first()

    if not user:
        return Response({'error': 'User not found.'}, status=status.HTTP_400_BAD_REQUEST)

    if not user.check_password(old_password):
        return Response({'error': 'Old password is incorrect.'}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()

    return Response({'message': 'Password updated successfully.'})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_data(request):
    email = request.query_params.get('email')
    user = User.objects.filter(email=email).first()

    if not user:
        return Response({'error': 'User not found.'}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(user)
    return Response(serializer.data)
