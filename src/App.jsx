import { useState } from 'react'
import './App.css'
import './index.css';
import { Typed } from 'react-typed'
import Navbar from './components/Navbar'
import Front from './components/Front'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Front/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
