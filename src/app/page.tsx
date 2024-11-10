import React from 'react'
import About from './About/page'
import Home from './Home/page'
import Skills from "./Skills/page";
import Projects from './Projects/page';
import Contact from './Contact/page'
const page = () => {
  return (
    <div>
          <Home/>
        <About />
        <Skills />
        <Projects/>
        <Contact/>
    </div>
  )
}

export default page