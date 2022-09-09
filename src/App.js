import React from 'react'
import Header2 from './components/Header2'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


const App = () => {
  return(
    <BrowserRouter>
        <Header2 />
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