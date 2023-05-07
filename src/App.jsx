import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Detalles from './pages/Detalles'
import Compras from './pages/Compras'
import NotFound from './pages/NotFound'
import Navegacion from './components/Navegacion'
import Footer from './components/Footer'
import Section from './pages/Section'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Buscador from './pages/Buscador'
import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <div className="App">
      {/* <p> Hola Pedalmanía ⏳ </p> */}
      <Navegacion />
      {/* <Buscador /> */}
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/compras' element={<Compras />} />
        <Route path='/detalles' element={<Detalles />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Section />
      <Footer />
    </div>
  )
}

export default App
