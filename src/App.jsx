import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ProductContext, useProductContext } from './context/ProductContext'

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
import Registro from './pages/Registro'
import Buscador from './pages/Buscador'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'

import './App.css'

function App() {
  /* const [count, setCount] = useState(0) */

  const { user } = useProductContext(ProductContext);
  console.log(user);

  return (
    <div className="App">
      {/* <p> Hola Pedalmanía ⏳ </p> */}
      <Navegacion />
      {/* <Buscador /> */}
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route
          path='/compras'
          element={user ? <Compras /> : <Login />} />
        <Route path='/detalles' element={<Detalles />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/registro'
          element={user ? <Dashboard /> : <Registro />} />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Section />
      <Footer />
    </div>
  )
}

export default App
