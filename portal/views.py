from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.views.decorators.http import require_http_methods
import os
import json

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
    """Get academic programs data"""
    programs = [
        {
            'id': 1,
            'title': 'Bachelor of Science in Business Administration',
            'description': 'Develop essential business skills and knowledge for leadership roles in various industries.',
            'icon': 'school',
            'specializations': [
                'Financial Management',
                'Marketing Management', 
                'Human Resource Management',
                'Operations Management'
            ]
        },
        {
            'id': 2,
            'title': 'Bachelor of Science in Information Technology',
            'description': 'Master the latest technologies and prepare for careers in the digital world.',
            'icon': 'computer',
            'specializations': [
                'Software Development',
                'Database Management',
                'Network Administration',
                'Web Development'
            ]
        },
        {
            'id': 3,
            'title': 'Bachelor of Science in Education',
            'description': 'Shape the future by becoming an educator and inspiring the next generation.',
            'icon': 'book',
            'specializations': [
                'Elementary Education',
                'Secondary Education',
                'Special Education',
                'Physical Education'
            ]
        },
        {
            'id': 4,
            'title': 'Bachelor of Science in Hospitality Management',
            'description': 'Excel in the dynamic world of hospitality and tourism management.',
            'icon': 'star',
            'specializations': [
                'Hotel Operations',
                'Food and Beverage',
                'Tourism Management',
                'Event Planning'
            ]
        }
    ]
    return JsonResponse({'programs': programs})

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

class ReactAppView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'CCB Portal'
        return context
