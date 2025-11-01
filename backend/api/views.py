from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Car, CarImage, Enquiry, CarEnquiry, MasterclassEnquiry, Testimonial
from .serializers import (
    CarSerializer, CarImageSerializer,
    EnquirySerializer, CarEnquirySerializer, MasterclassEnquirySerializer, 
    TestimonialSerializer
)

class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all().order_by('-created_at')
    serializer_class = CarSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['engine_type', 'status', 'year']
    search_fields = ['make', 'model', 'color', 'description']
    ordering_fields = ['price', 'year', 'mileage', 'created_at']

    def get_queryset(self):
        queryset = super().get_queryset()
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')

        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        return queryset

class CarImageViewSet(viewsets.ModelViewSet):
    queryset = CarImage.objects.all()
    serializer_class = CarImageSerializer


class EnquiryViewSet(viewsets.ModelViewSet):
    queryset = Enquiry.objects.all().order_by('-created_at')
    serializer_class = EnquirySerializer
    http_method_names = ['post', 'get', 'head'] 

class CarEnquiryViewSet(viewsets.ModelViewSet):
    queryset = CarEnquiry.objects.all().order_by('-created_at')
    serializer_class = CarEnquirySerializer

class MasterclassEnquiryCreateView(viewsets.ModelViewSet):
    queryset = MasterclassEnquiry.objects.all()
    serializer_class = MasterclassEnquirySerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    """ViewSet for handling all testimonial operations"""
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.order_by("display_order", "-created_at")

    def get_queryset(self):
        queryset = Testimonial.objects.order_by("display_order", "-created_at")

        #Optional filters via query params
        show_homepage = self.request.query_params.get("homepage")
        featured = self.request.query_params.get("featured")

        if show_homepage:
            queryset = queryset.filter(show_on_homepage=True)
        if featured:
            queryset = queryset.filter(featured=True)

        return queryset

    #Optional custom action for homepage
    @action(detail=False, methods=["get"], url_path="homepage")
    def homepage_testimonials(self, request):
        """Returns testimonials marked for homepage"""
        testimonials = self.get_queryset().filter(show_on_homepage=True)
        serializer = self.get_serializer(testimonials, many=True)
        return Response(serializer.data)