from django.contrib import admin
from .models import Car, Owner, Enquiry

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ("name", "make", "model", "engine_type","price", "status")
    list_filter = ("engine_type", "status", "make")
    search_fields = ("name", "make", "model")

@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "email")
    search_fields = ("name", "phone", "email")
    search_fields = ("name", "phone", "email")

@admin.register(Enquiry)
class EquiryAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "subject", "created_at")
    search_fields = ("full_name", "email", "phone", "subject")
    list_filter = ("created_at",)