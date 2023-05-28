import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { useProductContext } from '../context/ProductContext'
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Detalles = () => {
  
  const params = useParams();
  const { pedales, addPedal } = useProductContext();
  

  const pedalSeleccionado = (id) => pedales.find((pedal) => pedal.id === id);
  const pedal = pedalSeleccionado(params.id);

  const handleAddPedal = (pedal) => {
    addPedal(pedal);
  }
  console.log(pedal)

  return (
    <div>
      <p>Conoce los detalles de tus pedales</p>
      <Link to="/"><Button>Inicio</Button></Link>
      

      
    </div>
  )
}

export default Detalles