import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
// import CoursesPage from './pages/courses/CoursesPage';
// import ContactPage from './pages/contact/ContactPage';
// import BlogsPage from './pages/blogs/BlogsPage';
// import AboutPage from './pages/about/AboutPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      
    </Routes>
  )
}

export default App