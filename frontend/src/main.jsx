import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App />
    <Footer/>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 5f807bdb345c133a5bbdb90aa882de12c81590e7
  </StrictMode>,
)
