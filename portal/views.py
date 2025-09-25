from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required, permission_required
from django.core.paginator import Paginator
from django.db.models import Q
import os
import json
from .models import AcademicProgram, ProgramSpecialization, AdmissionsImportantDate, Announcement, Event, Achievement

def index(request):
    """Serve React frontend"""
    return render(request, 'index.html')

def api_test(request):
    """Test API endpoint"""
    return JsonResponse({
        'message': 'Hello from Django API!',
        'status': 'success'
    })

@require_http_methods(["GET"])
def api_academic_programs(request):
    """Get academic programs data from database"""
    try:
        # Get all active programs ordered by display_order
        programs = AcademicProgram.objects.filter(is_active=True).order_by('display_order', 'title')
        
        programs_data = []
        for program in programs:
            # Get active specializations for this program
            specializations = program.specializations.filter(is_active=True).values_list('name', flat=True)
            
            program_data = {
                'id': program.id,
                'title': program.title,
                'short_title': program.short_title,
                'program_type': program.program_type,
                'description': program.description,
                'duration_years': program.duration_years,
                'total_units': program.total_units,
                'with_enhancements': program.with_enhancements,
                'duration_text': program.duration_text,
                'units_text': program.units_text,
                'enhancements_text': program.enhancements_text,
                'program_overview': program.program_overview,
                'core_courses': program.core_courses.split('\n') if program.core_courses else [],
                'career_prospects': program.career_prospects,
                'general_requirements': getattr(program, 'general_requirements', '').split('\n') if getattr(program, 'general_requirements', None) else [],
                'specific_requirements': getattr(program, 'specific_requirements', '').split('\n') if getattr(program, 'specific_requirements', None) else [],
                'specializations': list(specializations),
                'display_order': program.display_order,
                'created_at': program.created_at.isoformat(),
                'updated_at': program.updated_at.isoformat()
            }
            programs_data.append(program_data)
        
        return JsonResponse({
            'status': 'success',
            'programs': programs_data,
            'count': len(programs_data)
        })
    
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error fetching programs: {str(e)}'
        }, status=500)

@require_http_methods(["GET"])
def api_academic_program_detail(request, program_id):
    """Get detailed information for a specific academic program"""
    try:
        program = get_object_or_404(AcademicProgram, id=program_id, is_active=True)
        
        # Get active specializations
        specializations = program.specializations.filter(is_active=True).values('id', 'name', 'description')
        
        program_data = {
            'id': program.id,
            'title': program.title,
            'short_title': program.short_title,
            'program_type': program.program_type,
            'description': program.description,
            'duration_years': program.duration_years,
            'total_units': program.total_units,
            'with_enhancements': program.with_enhancements,
            'duration_text': program.duration_text,
            'units_text': program.units_text,
            'enhancements_text': program.enhancements_text,
            'program_overview': program.program_overview,
            'core_courses': program.core_courses.split('\n') if program.core_courses else [],
            'career_prospects': program.career_prospects,
            'general_requirements': getattr(program, 'general_requirements', '').split('\n') if getattr(program, 'general_requirements', None) else [],
            'specific_requirements': getattr(program, 'specific_requirements', '').split('\n') if getattr(program, 'specific_requirements', None) else [],
            'specializations': list(specializations),
            'display_order': program.display_order,
            'created_at': program.created_at.isoformat(),
            'updated_at': program.updated_at.isoformat()
        }
        
        return JsonResponse({
            'status': 'success',
            'program': program_data
        })
    
    except AcademicProgram.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Program not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error fetching program: {str(e)}'
        }, status=500)

@require_http_methods(["GET"])
def api_news_events(request):
    """Get news and events data"""
    news_items = [
        {
            'id': 1,
            'date': 'December 18, 2025',
            'title': 'CCB Research Symposium 2025',
            'description': 'Showcasing innovative research projects across departments.',
            'image_url': '/static/images/news1.jpg'
        },
        {
            'id': 2,
            'date': 'December 15, 2025',
            'title': 'Annual Recognition Day 2025',
            'description': 'Celebrating the achievements of our outstanding students.',
            'image_url': '/static/images/news2.jpg'
        },
        {
            'id': 3,
            'date': 'December 12, 2025',
            'title': 'Community Outreach Program',
            'description': 'Volunteer activities focused on education and health awareness.',
            'image_url': '/static/images/news3.jpg'
        },
        {
            'id': 4,
            'date': 'December 10, 2025',
            'title': 'New Computer Laboratory Opening',
            'description': 'State-of-the-art facilities for hands-on IT learning.',
            'image_url': '/static/images/news4.jpg'
        },
        {
            'id': 5,
            'date': 'December 9, 2025',
            'title': 'Faculty Development Workshop',
            'description': 'Continuous upskilling for academic excellence.',
            'image_url': '/static/images/news5.jpg'
        },
        {
            'id': 6,
            'date': 'December 7, 2025',
            'title': 'Alumni Homecoming',
            'description': 'A night of memories and connections with our alumni.',
            'image_url': '/static/images/news6.jpg'
        }
    ]
    return JsonResponse({'news_items': news_items})

@require_http_methods(["GET"])
def api_admissions_info(request):
    """Get admissions information"""
    admissions_data = {
        'requirements': [
            'Completed Application Form',
            'High School Diploma or Equivalent',
            'Official Transcript of Records',
            'Certificate of Good Moral Character',
            'Medical Certificate',
            '2x2 ID Pictures (4 copies)',
            'Birth Certificate (NSO/PSA)'
        ],
        'process_steps': [
            {
                'step': 1,
                'title': 'Submit Application',
                'description': 'Complete and submit your application form with all required documents'
            },
            {
                'step': 2,
                'title': 'Entrance Examination',
                'description': 'Take the college entrance examination on the scheduled date'
            },
            {
                'step': 3,
                'title': 'Interview',
                'description': 'Attend the scheduled interview with the admissions committee'
            },
            {
                'step': 4,
                'title': 'Enrollment',
                'description': 'Complete enrollment procedures and pay necessary fees'
            }
        ]
    }
    return JsonResponse(admissions_data)

@require_http_methods(["GET"])
def api_admissions_important_dates(request):
    """Return admissions important dates from the database"""
    try:
        dates = AdmissionsImportantDate.objects.filter(is_active=True).order_by('display_order', 'start_date')
        items = []
        for item in dates:
            items.append({
                'id': item.id,
                'title': item.title,
                'start_date': item.start_date.isoformat(),
                'end_date': item.end_date.isoformat(),
            })
        return JsonResponse({'status': 'success', 'important_dates': items, 'count': len(items)})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'Error fetching important dates: {str(e)}'}, status=500)

@require_http_methods(["GET"])
def api_downloads(request):
    """Get downloads data"""
    downloads_data = {
        'student_forms': [
            {'name': 'Application Form', 'url': '/downloads/application-form.pdf'},
            {'name': 'Enrollment Form', 'url': '/downloads/enrollment-form.pdf'},
            {'name': 'Student Handbook', 'url': '/downloads/student-handbook.pdf'}
        ],
        'academic_calendar': [
            {'name': 'Academic Calendar 2025-2026', 'url': '/downloads/academic-calendar-2025-2026.pdf'},
            {'name': 'Class Schedule', 'url': '/downloads/class-schedule.pdf'}
        ],
        'policies_guidelines': [
            {'name': 'Student Code of Conduct', 'url': '/downloads/student-code-of-conduct.pdf'},
            {'name': 'Academic Policies', 'url': '/downloads/academic-policies.pdf'}
        ]
    }
    return JsonResponse(downloads_data)

@require_http_methods(["GET"])
def api_announcements(request):
    """Return active announcements"""
    try:
        items = Announcement.objects.filter(is_active=True).order_by('display_order', '-date')
        data = [
            {
                'id': a.id,
                'title': a.title,
                'date': a.date.isoformat(),
                'body': a.body,
                'details': a.details,
            }
            for a in items
        ]
        return JsonResponse({'status': 'success', 'announcements': data, 'count': len(data)})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'Error fetching announcements: {str(e)}'}, status=500)

@require_http_methods(["POST"])
@csrf_exempt
@login_required
@permission_required('portal.add_announcement', raise_exception=True)
def api_create_announcement(request):
    """Create a new announcement (Admin only)"""
    try:
        data = json.loads(request.body)

        # Validate required fields
        required_fields = ['title', 'date', 'body']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'status': 'error',
                    'message': f'Field "{field}" is required'
                }, status=400)

        announcement = Announcement.objects.create(
            title=data['title'],
            date=data['date'],
            body=data['body'],
            details=data.get('details', ''),
            is_active=data.get('is_active', True),
            display_order=data.get('display_order', 0)
        )

        return JsonResponse({
            'status': 'success',
            'message': 'Announcement created successfully',
            'announcement': {
                'id': announcement.id,
                'title': announcement.title,
                'date': announcement.date.isoformat()
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error creating announcement: {str(e)}'
        }, status=500)

@require_http_methods(["PUT", "PATCH"])
@csrf_exempt
@login_required
@permission_required('portal.change_announcement', raise_exception=True)
def api_update_announcement(request, announcement_id):
    """Update an announcement (Admin only)"""
    try:
        announcement = get_object_or_404(Announcement, id=announcement_id)
        data = json.loads(request.body)

        fields_to_update = [
            'title', 'date', 'body', 'details', 'is_active', 'display_order'
        ]

        for field in fields_to_update:
            if field in data:
                setattr(announcement, field, data[field])

        announcement.save()

        return JsonResponse({
            'status': 'success',
            'message': 'Announcement updated successfully',
            'announcement': {
                'id': announcement.id,
                'title': announcement.title,
                'date': announcement.date.isoformat()
            }
        })
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Announcement.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Announcement not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error updating announcement: {str(e)}'
        }, status=500)

@require_http_methods(["DELETE"])
@csrf_exempt
@login_required
@permission_required('portal.delete_announcement', raise_exception=True)
def api_delete_announcement(request, announcement_id):
    """Delete an announcement (Admin only)"""
    try:
        announcement = get_object_or_404(Announcement, id=announcement_id)
        announcement_title = announcement.title
        announcement.delete()

        return JsonResponse({
            'status': 'success',
            'message': f'Announcement "{announcement_title}" deleted successfully'
        })
    
    except Announcement.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Announcement not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error deleting announcement: {str(e)}'
        }, status=500)

@require_http_methods(["GET"])
def api_events(request):
    """Return active events"""
    try:
        items = Event.objects.filter(is_active=True).order_by('display_order', 'event_date', 'start_time')
        data = [
            {
                'id': e.id,
                'title': e.title,
                'description': e.description,
                'details': e.details,
                'event_date': e.event_date.isoformat(),
                'start_time': e.start_time.strftime('%H:%M'),
                'end_time': e.end_time.strftime('%H:%M'),
                'formatted_time': e.formatted_time,
                'formatted_date': e.formatted_date,
                'location': e.location,
                'display_order': e.display_order,
            }
            for e in items
        ]
        return JsonResponse({'status': 'success', 'events': data, 'count': len(data)})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'Error fetching events: {str(e)}'}, status=500)

@require_http_methods(["GET"])
def api_achievements(request):
    """Return active achievements"""
    try:
        items = Achievement.objects.filter(is_active=True).order_by('display_order', '-achievement_date')
        data = [
            {
                'id': a.id,
                'title': a.title,
                'description': a.description,
                'details': a.details,
                'achievement_date': a.achievement_date.isoformat(),
                'formatted_date': a.formatted_date,
                'category': a.category,
                'display_order': a.display_order,
            }
            for a in items
        ]
        return JsonResponse({'status': 'success', 'achievements': data, 'count': len(data)})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'Error fetching achievements: {str(e)}'}, status=500)

@require_http_methods(["POST"])
@csrf_exempt
def api_contact_form(request):
    """Handle contact form submissions"""
    try:
        data = json.loads(request.body)
        name = data.get('name', '')
        email = data.get('email', '')
        message = data.get('message', '')
        
        # Here you would typically save to database or send email
        # For now, we'll just return success
        
        return JsonResponse({
            'status': 'success',
            'message': 'Thank you for your message. We will get back to you soon!'
        })
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)

# Admin-only CRUD operations for Academic Programs
@require_http_methods(["POST"])
@csrf_exempt
@login_required
@permission_required('portal.add_academicprogram', raise_exception=True)
def api_create_academic_program(request):
    """Create a new academic program (Admin only)"""
    try:
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['title', 'short_title', 'description']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'status': 'error',
                    'message': f'Field "{field}" is required'
                }, status=400)
        
        # Create the program
        program = AcademicProgram.objects.create(
            title=data['title'],
            short_title=data['short_title'],
            program_type=data.get('program_type', 'BS'),
            description=data['description'],
            duration_years=data.get('duration_years', 4),
            total_units=data.get('total_units', 120),
            with_enhancements=data.get('with_enhancements', 0),
            program_overview=data.get('program_overview', ''),
            core_courses=data.get('core_courses', ''),
            career_prospects=data.get('career_prospects', ''),
            is_active=data.get('is_active', True),
            display_order=data.get('display_order', 0)
        )
        
        return JsonResponse({
            'status': 'success',
            'message': 'Program created successfully',
            'program': {
                'id': program.id,
                'title': program.title,
                'short_title': program.short_title
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error creating program: {str(e)}'
        }, status=500)

@require_http_methods(["PUT", "PATCH"])
@csrf_exempt
@login_required
@permission_required('portal.change_academicprogram', raise_exception=True)
def api_update_academic_program(request, program_id):
    """Update an academic program (Admin only)"""
    try:
        program = get_object_or_404(AcademicProgram, id=program_id)
        data = json.loads(request.body)
        
        # Update fields
        fields_to_update = [
            'title', 'short_title', 'program_type', 'description', 'duration_years',
            'total_units', 'with_enhancements', 'program_overview', 'core_courses', 
            'career_prospects', 'is_active', 'display_order'
        ]
        
        for field in fields_to_update:
            if field in data:
                setattr(program, field, data[field])
        
        program.save()
        
        return JsonResponse({
            'status': 'success',
            'message': 'Program updated successfully',
            'program': {
                'id': program.id,
                'title': program.title,
                'short_title': program.short_title
            }
        })
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except AcademicProgram.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Program not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error updating program: {str(e)}'
        }, status=500)

@require_http_methods(["DELETE"])
@csrf_exempt
@login_required
@permission_required('portal.delete_academicprogram', raise_exception=True)
def api_delete_academic_program(request, program_id):
    """Delete an academic program (Admin only)"""
    try:
        program = get_object_or_404(AcademicProgram, id=program_id)
        program_title = program.title
        program.delete()
        
        return JsonResponse({
            'status': 'success',
            'message': f'Program "{program_title}" deleted successfully'
        })
    
    except AcademicProgram.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Program not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error deleting program: {str(e)}'
        }, status=500)

# Admin-only CRUD operations for Events
@require_http_methods(["POST"])
@csrf_exempt
@login_required
@permission_required('portal.add_event', raise_exception=True)
def api_create_event(request):
    """Create a new event (Admin only)"""
    try:
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['title', 'description', 'event_date', 'start_time', 'end_time']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'status': 'error',
                    'message': f'Field "{field}" is required'
                }, status=400)
        
        # Create the event
        event = Event.objects.create(
            title=data['title'],
            description=data['description'],
            details=data.get('details', ''),
            event_date=data['event_date'],
            start_time=data['start_time'],
            end_time=data['end_time'],
            location=data.get('location', ''),
            is_active=data.get('is_active', True),
            display_order=data.get('display_order', 0)
        )
        
        return JsonResponse({
            'status': 'success',
            'message': 'Event created successfully',
            'event': {
                'id': event.id,
                'title': event.title,
                'event_date': event.event_date.isoformat()
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error creating event: {str(e)}'
        }, status=500)

@require_http_methods(["PUT", "PATCH"])
@csrf_exempt
@login_required
@permission_required('portal.change_event', raise_exception=True)
def api_update_event(request, event_id):
    """Update an event (Admin only)"""
    try:
        event = get_object_or_404(Event, id=event_id)
        data = json.loads(request.body)
        
        # Update fields
        fields_to_update = [
            'title', 'description', 'details', 'event_date', 'start_time', 
            'end_time', 'location', 'is_active', 'display_order'
        ]
        
        for field in fields_to_update:
            if field in data:
                setattr(event, field, data[field])
        
        event.save()
        
        return JsonResponse({
            'status': 'success',
            'message': 'Event updated successfully',
            'event': {
                'id': event.id,
                'title': event.title,
                'event_date': event.event_date.isoformat()
            }
        })
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Event.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Event not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error updating event: {str(e)}'
        }, status=500)

@require_http_methods(["DELETE"])
@csrf_exempt
@login_required
@permission_required('portal.delete_event', raise_exception=True)
def api_delete_event(request, event_id):
    """Delete an event (Admin only)"""
    try:
        event = get_object_or_404(Event, id=event_id)
        event_title = event.title
        event.delete()
        
        return JsonResponse({
            'status': 'success',
            'message': f'Event "{event_title}" deleted successfully'
        })
    
    except Event.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Event not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error deleting event: {str(e)}'
        }, status=500)

# Admin-only CRUD operations for Achievements
@require_http_methods(["POST"])
@csrf_exempt
@login_required
@permission_required('portal.add_achievement', raise_exception=True)
def api_create_achievement(request):
    """Create a new achievement (Admin only)"""
    try:
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['title', 'description', 'achievement_date']
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({
                    'status': 'error',
                    'message': f'Field "{field}" is required'
                }, status=400)
        
        # Create the achievement
        achievement = Achievement.objects.create(
            title=data['title'],
            description=data['description'],
            details=data.get('details', ''),
            achievement_date=data['achievement_date'],
            category=data.get('category', 'Achievement'),
            is_active=data.get('is_active', True),
            display_order=data.get('display_order', 0)
        )
        
        return JsonResponse({
            'status': 'success',
            'message': 'Achievement created successfully',
            'achievement': {
                'id': achievement.id,
                'title': achievement.title,
                'achievement_date': achievement.achievement_date.isoformat()
            }
        }, status=201)
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error creating achievement: {str(e)}'
        }, status=500)

@require_http_methods(["PUT", "PATCH"])
@csrf_exempt
@login_required
@permission_required('portal.change_achievement', raise_exception=True)
def api_update_achievement(request, achievement_id):
    """Update an achievement (Admin only)"""
    try:
        achievement = get_object_or_404(Achievement, id=achievement_id)
        data = json.loads(request.body)
        
        # Update fields
        fields_to_update = [
            'title', 'description', 'details', 'achievement_date', 
            'category', 'is_active', 'display_order'
        ]
        
        for field in fields_to_update:
            if field in data:
                setattr(achievement, field, data[field])
        
        achievement.save()
        
        return JsonResponse({
            'status': 'success',
            'message': 'Achievement updated successfully',
            'achievement': {
                'id': achievement.id,
                'title': achievement.title,
                'achievement_date': achievement.achievement_date.isoformat()
            }
        })
    
    except json.JSONDecodeError:
        return JsonResponse({
            'status': 'error',
            'message': 'Invalid JSON data'
        }, status=400)
    except Achievement.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Achievement not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error updating achievement: {str(e)}'
        }, status=500)

@require_http_methods(["DELETE"])
@csrf_exempt
@login_required
@permission_required('portal.delete_achievement', raise_exception=True)
def api_delete_achievement(request, achievement_id):
    """Delete an achievement (Admin only)"""
    try:
        achievement = get_object_or_404(Achievement, id=achievement_id)
        achievement_title = achievement.title
        achievement.delete()
        
        return JsonResponse({
            'status': 'success',
            'message': f'Achievement "{achievement_title}" deleted successfully'
        })
    
    except Achievement.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Achievement not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Error deleting achievement: {str(e)}'
        }, status=500)

class ReactAppView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'CCB Portal'
        return context
