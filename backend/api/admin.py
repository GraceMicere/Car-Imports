from django.contrib import admin
from .models import Car, CarImage, Enquiry, CarEnquiry, MasterclassEnquiry, Testimonial
from markdownx.admin import MarkdownxModelAdmin
from django.utils.html import format_html

class CarImageInline(admin.TabularInline):
    model = CarImage
    extra = 1

@admin.register(Car)
class CarAdmin(MarkdownxModelAdmin):
    list_display = ('name', 'make', 'model', 'year', 'price', 'status')
    search_fields = ('name', 'make', 'model', 'year')
    list_filter = ('status', 'make', 'year')
    inlines = [CarImageInline]

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'subject', 'created_at')
    search_fields = ('full_name', 'email', 'subject')
    list_filter = ('created_at',)

@admin.register(CarEnquiry)
class CarEnquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'model', 'email', 'created_at')
    search_fields = ('full_name', 'email', 'model')
    list_filter = ('created_at',)

@admin.register(MasterclassEnquiry)
class MasterclassEnquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'message', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
    list_filter = ('created_at',)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "author_name",
        "author_role",
        "layout_type",
        "rating",
        "featured",
        "show_on_homepage",
        "display_order",
        "created_at",
    )
    list_editable = ("featured", "show_on_homepage", "display_order")
    list_filter = ("layout_type", "featured", "show_on_homepage", "rating")
    search_fields = ("title", "author_name", "testimonial_text")
    ordering = ("display_order", "-created_at")

    fieldsets = (
        ("Basic Information", {
            "fields": (
                "title",
                "slug",
                ("author_name", "author_role"),
            )
        }),
        ("Content", {
            "fields": (
                "testimonial_text",
                ("youtube_url", "layout_type"),
            ),
            "description": "Add a text testimonial, YouTube link, or both (depending on layout type)."
        }),
        ("Display Settings", {
            "fields": (
                "rating",
                "featured",
                "show_on_homepage",
                "display_order",
            )
        }),
        ("Timestamps", {
            "fields": ("created_at", "updated_at"),
            "classes": ("collapse",),
        }),
    )

    readonly_fields = ("created_at", "updated_at", "slug", "youtube_id")

    def clean(self):
        if self.youtube_url and 'youtube' not in self.youtube_url and 'youtu.be' not in self.youtube_url:
            raise ValidationError("Please enter a valid YouTube link.")

    def save_model(self, request, obj, form, change):
        """Ensure YouTube ID and slug auto-generate on save"""
        obj.save()

    def get_queryset(self, request):
        """Order by display_order and newest first"""
        qs = super().get_queryset(request)
        return qs.order_by("display_order", "-created_at")

    def has_delete_permission(self, request, obj=None):
        """Optional: Prevent accidental deletions of testimonials"""
        return True  # Set to False if you want to protect testimonials