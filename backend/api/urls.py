from django.urls import path
from . import views

urlpatterns = [
    path('cars/', views.get_cars),
    path('cars/filter/', views.filter_cars),
    path("enquiries/", views.create_enquiry, name="enquiry-create"),
]