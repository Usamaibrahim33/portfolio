/* eslint-disable react/no-unknown-property */
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FrontMessage from './components/FrontMessage'
import AboutMe from './components/Aboutme'
import Projects from './components/Projects'
import { Link, Route, Routes } from 'react-router-dom';
import ServerOffered from './components/Some'
import { useEffect, useState } from 'react'


const getDarkModeStatus = () => {
  
  const dar = localStorage.getItem('darkMode')
  return dar !== null ? JSON.parse(dar) : false;
}


function App() {
  const [darkMode, setDarkMode] = useState(getDarkModeStatus())

  const handleDarkMode = () => {
    const newMode = !darkMode; 

    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); 
  
}


  function Home() {
    return (
        <>
            <Header  setDarkMode={setDarkMode}  handleDarkMode={handleDarkMode}  darkMode={darkMode} />
            <div className='md:px-32 lg:px-60'>
                <FrontMessage />
                <ServerOffered />
                <AboutMe />
                <Projects />
                <Contact />
            </div>
        </>
    );
  }

     return (
     <>
        <div className={darkMode ? "dark" : ""}>
            <section className='min-h-screen dark:bg-black'>
                <Header  setDarkMode={setDarkMode}  handleDarkMode={handleDarkMode}  darkMode={darkMode}  />
                <Routes>
                  <Route path='/' element={<Home  />} />
                  <Route path='/projects' element={<Projects/>} />
                  <Route path='/about' element={<AboutMe />} />
                  <Route path='/service' element={<ServerOffered />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes> 
                <Footer  />         
            </section>
        </div>
     </>
  )
}



export default App
