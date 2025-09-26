from django.contrib import admin
from .models import AcademicProgram, ProgramSpecialization, AdmissionsImportantDate, Announcement, Event, Achievement

# Register your models here.
admin.site.register(AcademicProgram)
admin.site.register(ProgramSpecialization)
@admin.register(AdmissionsImportantDate)
class AdmissionsImportantDateAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_date', 'end_date', 'is_active', 'display_order')
    list_filter = ('is_active',)
    search_fields = ('title',)
    ordering = ('display_order', 'start_date')

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_active', 'display_order')
    list_filter = ('is_active',)
    search_fields = ('title', 'body', 'details')
    ordering = ('display_order', '-date')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'event_date', 'start_time', 'end_time', 'location', 'is_active', 'display_order')
    list_filter = ('is_active', 'event_date')
    search_fields = ('title', 'description', 'details', 'location')
    ordering = ('display_order', 'event_date', 'start_time')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'details')
        }),
        ('Date & Time', {
            'fields': ('event_date', 'start_time', 'end_time')
        }),
        ('Additional Information', {
            'fields': ('location', 'is_active', 'display_order')
        }),
    )

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'achievement_date', 'category', 'is_active', 'display_order')
    list_filter = ('is_active', 'achievement_date', 'category')
    search_fields = ('title', 'description', 'details', 'category')
    ordering = ('display_order', '-achievement_date')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'details')
        }),
        ('Date & Category', {
            'fields': ('achievement_date', 'category')
        }),
        ('Display Settings', {
            'fields': ('is_active', 'display_order')
        }),
    )