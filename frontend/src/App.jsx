import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Impact from './components/Impact/Impact.jsx';
import EmpireBlueIntro from './components/EmpireBlueIntro/EmpireBlueIntro.jsx';

const App = () => {
  return (
    <>
    <Navbar />
    <ContactUs/>
    <AboutUs/>
    <Impact/>
    <EmpireBlueIntro/>
    </>
  )
}

export default App