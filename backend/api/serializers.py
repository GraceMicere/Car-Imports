from rest_framework import serializers
from .models import Car, Owner, Enquiry

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    owner = OwnerSerializer(read_only=True)
    class Meta:
        model = Car
        fields = '__all__'

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'