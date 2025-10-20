from rest_framework.response import Response 
from rest_framework.decorators import api_view
from rest_framework import generics, status
from .models import Car, Enquiry
from .serializers import CarSerializer, EnquirySerializer

@api_view(['GET'])
def get_cars(request):
    status = request.GET.get('status')
    if status:
        cars = cars.objects.filter(status=status).order_by('-created_at')
    else:
        cars = Car.objects.all().order_by('-created_at')
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def filter_cars(request):
    engine = request.GET.get('engine')
    queryset = Car.objects.all()
    if engine:
        queryset = queryset.filter(engine_type=engine)
    serializer = CarSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def create_enquiry(request):
    serializer = EnquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)