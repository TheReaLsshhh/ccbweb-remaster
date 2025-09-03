from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReactAppView.as_view(), name='index'),
    path('api/test/', views.api_test, name='api_test'),
    path('api/academic-programs/', views.api_academic_programs, name='api_academic_programs'),
    path('api/news-events/', views.api_news_events, name='api_news_events'),
    path('api/admissions-info/', views.api_admissions_info, name='api_admissions_info'),
    path('api/downloads/', views.api_downloads, name='api_downloads'),
    path('api/contact-form/', views.api_contact_form, name='api_contact_form'),
] 