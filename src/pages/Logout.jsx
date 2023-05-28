import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ProductContext, useProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Logout = () => {

  const { user } =  useProductContext(ProductContext);

  return (
    <div className="logout">
      <h5 className="logout-texto">¡Gracias por tu visita {user && user.name}! </h5>
      <h6 className="logout-texto">Pulsa el botón para cerrar esta sesión</h6>
      
      <Link className="logout-boton" to={`/ `} >
        <Button
          variant="secondary"
          value="Reload Page"
          onClick="window.location.reload(true)"
        >Finalizar</Button>
      </Link>
    </div>
  )
}

export default Logout