import logo from './logo.svg';
import './App.scss';
import React, { useState } from "react";
import Sidebar from './Components/Sidebar';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contacts'

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <>
     
        <Routes>
          <Route path='/' element={ <Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}


export default App;
