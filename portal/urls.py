from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReactAppView.as_view(), name='index'),
    path('api/test/', views.api_test, name='api_test'),
    
    # Public API endpoints
    path('api/academic-programs/', views.api_academic_programs, name='api_academic_programs'),
    path('api/academic-programs/<int:program_id>/', views.api_academic_program_detail, name='api_academic_program_detail'),
    path('api/news-events/', views.api_news_events, name='api_news_events'),
    path('api/announcements/', views.api_announcements, name='api_announcements'),
    path('api/events/', views.api_events, name='api_events'),
    path('api/achievements/', views.api_achievements, name='api_achievements'),
    path('api/admissions-info/', views.api_admissions_info, name='api_admissions_info'),
    path('api/admissions-important-dates/', views.api_admissions_important_dates, name='api_admissions_important_dates'),
    path('api/downloads/', views.api_downloads, name='api_downloads'),
    path('api/contact-form/', views.api_contact_form, name='api_contact_form'),
    path('api/contact/', views.contact, name='contact'),
    path('api/contact/verify/', views.api_contact_verify, name='api_contact_verify'),
    
    # Admin-only GET endpoints (for loading all data including inactive)
    path('api/admin/academic-programs/all/', views.api_admin_academic_programs, name='api_admin_academic_programs'),
    path('api/admin/events/all/', views.api_admin_events, name='api_admin_events'),
    path('api/admin/achievements/all/', views.api_admin_achievements, name='api_admin_achievements'),
    path('api/admin/announcements/all/', views.api_admin_announcements, name='api_admin_announcements'),
    path('api/admin/admissions-important-dates/all/', views.api_admin_admissions_important_dates, name='api_admin_admissions_important_dates'),
    
    # Admin-only CRUD endpoints for Academic Programs
    path('api/admin/academic-programs/', views.api_create_academic_program, name='api_create_academic_program'),
    path('api/admin/academic-programs/<int:program_id>/', views.api_update_academic_program, name='api_update_academic_program'),
    path('api/admin/academic-programs/<int:program_id>/delete/', views.api_delete_academic_program, name='api_delete_academic_program'),
    
    # Admin-only CRUD endpoints for Events
    path('api/admin/events/', views.api_create_event, name='api_create_event'),
    path('api/admin/events/<int:event_id>/', views.api_update_event, name='api_update_event'),
    path('api/admin/events/<int:event_id>/delete/', views.api_delete_event, name='api_delete_event'),
    
    # Admin-only CRUD endpoints for Achievements
    path('api/admin/achievements/', views.api_create_achievement, name='api_create_achievement'),
    path('api/admin/achievements/<int:achievement_id>/', views.api_update_achievement, name='api_update_achievement'),
    path('api/admin/achievements/<int:achievement_id>/delete/', views.api_delete_achievement, name='api_delete_achievement'),
    
    # Admin-only CRUD endpoints for Announcements
    path('api/admin/announcements/', views.api_create_announcement, name='api_create_announcement'),
    path('api/admin/announcements/<int:announcement_id>/', views.api_update_announcement, name='api_update_announcement'),
    path('api/admin/announcements/<int:announcement_id>/delete/', views.api_delete_announcement, name='api_delete_announcement'),
    
    # Admin-only CRUD endpoints for Admissions Important Dates
    path('api/admin/admissions-important-dates/', views.api_create_admissions_important_date, name='api_create_admissions_important_date'),
    path('api/admin/admissions-important-dates/<int:date_id>/', views.api_update_admissions_important_date, name='api_update_admissions_important_date'),
    path('api/admin/admissions-important-dates/<int:date_id>/delete/', views.api_delete_admissions_important_date, name='api_delete_admissions_important_date'),
    
    # Authentication endpoints
    path('api/auth/login/', views.api_login, name='api_login'),
    path('api/auth/logout/', views.api_logout, name='api_logout'),
    path('api/auth/check/', views.api_check_auth, name='api_check_auth'),
    path('api/auth/superuser-credentials/', views.api_get_superuser_credentials, name='api_get_superuser_credentials'),
] 