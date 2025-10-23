from rest_framework import serializers
from .models import Car, CarImage, Enquiry, CarEnquiry


class CarImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = CarImage
        fields = ['id', 'image']

class CarSerializer(serializers.ModelSerializer):
    images = CarImageSerializer(many=True, read_only=True)

    class Meta:
        model = Car
        fields = [
            'id', 'name', 'make', 'model', 'year', 'grade', 'engine_type',
            'mileage', 'price', 'color', 'description', 'transmission',
            'features', 'status', 'created_at', 'images'
        ]

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'

class CarEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarEnquiry
        fields = '__all__'