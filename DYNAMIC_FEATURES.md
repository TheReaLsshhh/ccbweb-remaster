# Dynamic Academic Programs Management

## Overview
The CCB Portal now supports dynamic management of academic programs through a comprehensive admin interface. Administrators can add, edit, and delete academic programs without modifying the code.

## Features Implemented

### 1. Database Models
- **AcademicProgram**: Main model for academic programs
  - Basic information (title, short title, program type, description)
  - Program details (duration, units, overview, core courses, career prospects)
  - Admission requirements (general and program-specific)
  - Display settings (active status, display order)
  
- **ProgramSpecialization**: Model for program specializations
  - Linked to academic programs
  - Customizable specializations per program

### 2. Django Admin Interface
- **AcademicProgramAdmin**: Comprehensive admin interface
  - List view with filtering and search
  - Organized fieldsets for easy editing
  - Inline editing of specializations
  - Bulk operations support
  
- **ProgramSpecializationAdmin**: Management of specializations
  - Filtered by program and active status
  - Search functionality

### 3. API Endpoints

#### Public Endpoints (No Authentication Required)
- `GET /api/academic-programs/` - List all active programs
- `GET /api/academic-programs/<id>/` - Get specific program details

#### Admin Endpoints (Authentication Required)
- `POST /api/admin/academic-programs/` - Create new program
- `PUT/PATCH /api/admin/academic-programs/<id>/` - Update program
- `DELETE /api/admin/academic-programs/<id>/delete/` - Delete program

### 4. Frontend Integration
- **Dynamic Data Loading**: Academic programs page now fetches data from API
- **Loading States**: Spinner and loading messages during data fetch
- **Error Handling**: User-friendly error messages with retry functionality
- **Real-time Updates**: Changes in admin are immediately reflected on frontend

## How to Use

### For Administrators

1. **Access Admin Panel**
   ```
   http://localhost:8000/admin/
   ```
   - Use your superuser credentials to log in

2. **Manage Academic Programs**
   - Navigate to "Academic Programs" section
   - Add new programs with all required information
   - Edit existing programs
   - Manage program specializations
   - Control display order and active status

3. **Program Fields**
   - **Basic Information**: Title, short title, program type, description
   - **Program Details**: Duration, units, overview, core courses, career prospects
   - **Admission Requirements**: General and program-specific requirements
   - **Display Settings**: Active status and display order

### For Developers

1. **API Integration**
   ```javascript
   // Fetch all programs
   const response = await apiService.getAcademicPrograms();
   const programs = response.programs;
   
   // Get specific program
   const program = await apiService.getAcademicProgramDetail(programId);
   ```

2. **Adding New Fields**
   - Update the `AcademicProgram` model
   - Create and run migrations
   - Update admin interface if needed
   - Modify API endpoints if required
   - Update frontend components

## Database Structure

### AcademicProgram Model
```python
class AcademicProgram(models.Model):
    title = CharField(max_length=200)
    short_title = CharField(max_length=100)
    program_type = CharField(choices=PROGRAM_TYPES)
    description = TextField()
    duration_years = PositiveIntegerField()
    total_units = PositiveIntegerField()
    program_overview = TextField()
    core_courses = JSONField()
    career_prospects = TextField()
    general_requirements = JSONField()
    specific_requirements = JSONField()
    is_active = BooleanField()
    display_order = PositiveIntegerField()
    created_at = DateTimeField()
    updated_at = DateTimeField()
```

### ProgramSpecialization Model
```python
class ProgramSpecialization(models.Model):
    program = ForeignKey(AcademicProgram)
    name = CharField(max_length=100)
    description = TextField()
    is_active = BooleanField()
```

## Sample Data
The system comes pre-populated with 4 academic programs:
1. Bachelor of Science in Business Administration (BSBA)
2. Bachelor of Science in Information Technology (BSIT)
3. Bachelor of Science in Education (BSEd)
4. Bachelor of Science in Hospitality Management (BSHM)

Each program includes:
- Detailed descriptions and overviews
- Core course listings
- Career prospects
- Admission requirements
- Program-specific requirements
- Specializations

## Benefits

1. **Content Management**: No code changes needed to update program information
2. **Flexibility**: Easy to add new programs or modify existing ones
3. **User Experience**: Real-time updates on the frontend
4. **Scalability**: System can handle unlimited number of programs
5. **Maintainability**: Centralized content management through admin interface

## Future Enhancements

1. **Rich Text Editor**: Add WYSIWYG editor for program descriptions
2. **File Uploads**: Support for program brochures and documents
3. **SEO Optimization**: Meta descriptions and keywords for each program
4. **Analytics**: Track program page views and popular programs
5. **Multi-language Support**: Internationalization for multiple languages
6. **Program Comparison**: Feature to compare multiple programs
7. **Application Integration**: Direct application links for each program

## Technical Notes

- **Database**: MySQL with Django ORM
- **API**: RESTful endpoints with JSON responses
- **Frontend**: React with dynamic data fetching
- **Authentication**: Django's built-in admin authentication
- **Permissions**: Role-based access control for admin operations

## Troubleshooting

### Server Error 500
If you encounter a 500 error, check the following:
1. **Database Connection**: Ensure MySQL is running and accessible
2. **Migrations**: Run `python manage.py migrate` to ensure all migrations are applied
3. **Static Files**: Create the staticfiles directory: `mkdir staticfiles`
4. **Dependencies**: Ensure all required packages are installed: `pip install -r requirements.txt`
5. **DEBUG Mode**: Ensure DEBUG=True in settings.py for development (set to False for production)

### Common Issues
- **Import Errors**: Check for duplicate imports in views.py
- **Permission Errors**: Ensure the database user has proper permissions
- **Static Files Warning**: Create the staticfiles directory to eliminate warnings
- **JSONField Issues**: If using MySQL, JSONField might cause issues - use TextField instead
- **Admin 500 Errors**: Usually caused by DEBUG=False or model field issues
