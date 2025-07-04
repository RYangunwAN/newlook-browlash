import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
  </StrictMode>,
)
