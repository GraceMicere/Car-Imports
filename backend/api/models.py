from django.db import models

class Owner(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.name

class Car(models.Model):
    ENGINE_CHOICES = [
        ('petrol', 'petrol'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid'),
    ]
    STATUS_CHOICES = [
        ('available', 'Available'),
        ('reserved', 'Reserved'),
        ('used', 'Used'),
        ('new', 'New'),
    ]

    name = models.CharField(max_length=100)
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    engine_type = models.CharField(max_length=10, choices=ENGINE_CHOICES)
    transmission = models.CharField(max_length=50)
    mileage = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    features = models.TextField(blank=True)
    image = models.ImageField(upload_to='car_images/', blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='available')
    owner = models.ForeignKey(Owner, on_delete=models.SET_NULL, related_name='cars', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.make} {self.model} ({self.year})"

class Enquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Enquiry from {self.full_name} - {self.subject or 'No Subject'}"