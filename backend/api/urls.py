from rest_framework.routers import DefaultRouter
from .views import CarViewSet, CarImageViewSet, EnquiryViewSet, CarEnquiryViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'car-images', CarImageViewSet)
router.register(r'enquiries', EnquiryViewSet)
router.register(r'car-enquiries', CarEnquiryViewSet)

urlpatterns = router.urls
