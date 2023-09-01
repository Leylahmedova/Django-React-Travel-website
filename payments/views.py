from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentSerializer

@api_view(['POST'])
def add_card(request):
    card_number = request.data.get('cardnumber')
    exp_date = request.data.get('expdate')
    cvc = request.data.get('cvc')
    name_on_card = request.data.get('nameoncard')
    country = request.data.get('country')
    hotelprice=request.data.get("hotelprice")
    type=request.data.get('type')
    
    if not (card_number and exp_date and cvc and name_on_card and country):
        return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)
    
    errors = {}
    if len(card_number) != 19:
        errors['cardnumber'] = 'Card number must be 16 characters long.'
    if len(exp_date) != 4:
        errors['expdate'] = 'Expiration date must be 4 characters long.'
    if len(cvc) != 3:
        errors['cvc'] = 'CVC must be 3 characters long.'
    # if not name_on_card.alpha:
    #     errors['nameoncard'] = 'Name on card must be in uppercase.'
    
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)

    serializer = PaymentSerializer(data={
        'card_number': card_number,
        'expiration_date': exp_date,
        'cvc': cvc,
        'name_on_card': name_on_card,
        'country': country,
        'hotelprice':hotelprice,
        'type':type
    })
    
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Card added successfully.'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_payments(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)