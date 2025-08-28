import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AcademicPrograms from './academicprogram';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academics" element={<AcademicPrograms />} />
        <Route path="/admissions" element={<HomePage />} />
        <Route path="/news" element={<HomePage />} />
        <Route path="/downloads" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App; 