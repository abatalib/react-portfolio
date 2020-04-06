import React, { useState } from 'react';
import './App.css';

import Awards from './Components/Awards';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Interests from './Components/Interest';
import Landing from './Components/Landing';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';

import JsonFile from './Components/profileData.json';


export default function App() {
  
  const [linkclc, setLink] = useState('landing');
  
  let links = [
    {label: "About", link: "landing"},
    {label: "Experience", link: "experience"},
    {label: "Education", link: "education"},
    {label: "Skills", link: "skills"},
    {label: "Interests", link: "interests"},
    {label: "Awards", link: "awards"},
  ]
  
  let leclick = (lnk = 'landing') => 
  {
    setLink(lnk);
  }

  function COMPOSANT_SELECTIONNE(lnk) {
    
    let pge = 'landing';
    const __COMPOSANTE = JsonFile[lnk];

    switch(lnk) {
      case 'landing':
        pge = <Landing landing={__COMPOSANTE} />
        break;
      default:
      case 'experience':
        pge = <Experience experience={__COMPOSANTE} />
        break;
      case 'awards':
        pge = <Awards awards={__COMPOSANTE} />
        break;
      case 'education':
        pge = <Education education={__COMPOSANTE} />
        break;
      case 'skills':
        pge = <Skills skills={__COMPOSANTE} />
        break;
      case 'interests':
        pge = <Interests interests={__COMPOSANTE} />
        break;
    }
    return pge
  }

  const sidebar = JsonFile.sidebar;
  return (
    <div className="App">
      <Sidebar sidebar={sidebar} links={links} clc={leclick} />
      {COMPOSANT_SELECTIONNE(linkclc)}
    </div>
  );
}
