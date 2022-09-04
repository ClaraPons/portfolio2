import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


const App = () => {
  return(
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App