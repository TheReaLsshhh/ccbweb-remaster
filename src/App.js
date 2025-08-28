import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AcademicPrograms from './academicprogram';
import Students from './students';
import FacultyStaff from './faculty_staff';
import AboutUs from './components/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academics" element={<AcademicPrograms />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<FacultyStaff />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admissions" element={<HomePage />} />
        <Route path="/news" element={<HomePage />} />
        <Route path="/downloads" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App; 