import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { useProductContext } from '../context/ProductContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Detalles = () => {
  return (
    <div>
      <p>Conoce los detalles de tus pedales</p>
      <Link to="/"><Button>Inicio</Button></Link>



      
    </div>
  )
}

export default Detalles