from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-r=@7c*a%f%&838c@m!6u-h-akain3xwhokaoi)seji6rqf@&)s'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOW_ALL_ORIGINS = True

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


JAZZMIN_SETTINGS = {
    "site_title": "Xplore Car Imports Admin",
    "site_header": "Xplore Admin",
    "site_brand": "Xplore Imports",
    "welcome_sign": "Welcome to Xplore Car Imports Dashboard",
    "site_logo_classes": "rounded-full",
    "copyright": "Xplore Car Imports © 2025",

    # Top menu (simple version)
    "topmenu_links": [
        {"name": "Home", "url": "/"},
        {"model": "auth.user"},
        {"app": "orders"},
    ],

    "show_sidebar": True,
    "navigation_expanded": True,

    # Colors
    "colors": {
        "accent": "#10B981",
        "accent_dark": "#047857",
        "primary": "#065F46",
        "secondary": "#6EE7B7",
        "link": "#059669",
        "hover": "#34D399",
        "bg": "#F9FAFB",
        "success": "#10B981",
        "warning": "#FBBF24",
        "danger": "#EF4444",
        "info": "#3B82F6",
    },

    # Buttons
    "button_classes": {
        "primary": "btn btn-success rounded-md px-4 py-2 shadow-md hover:shadow-lg",
        "secondary": "btn btn-outline-success rounded-md px-4 py-2",
        "warning": "btn btn-warning rounded-md px-4 py-2",
        "danger": "btn btn-danger rounded-md px-4 py-2",
        "info": "btn btn-info rounded-md px-4 py-2",
    },

    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {},
}
