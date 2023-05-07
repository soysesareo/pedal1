import React from 'react'
import { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductContext, useProductContext } from '../context/ProductContext'

const Compras = () => {

  const { compras } = useProductContext(ProductContext);
  console.log(compras);

  
  
  return (
    <div>
      <p>Acá están tus compras</p>
      {/* <p>Acá están tus compras</p> */}
      <div>
        {
          compras.map((compra) => (
            <div key={compra.id}>
              <img height={"85px"} src={compra.img} alt={compra.name} />
              <h5>{compra.brand}</h5>
              <h5>{compra.name}</h5>
              <div>
                <h5>${compra.price}</h5>
              </div>
            </div>
          ))
        }
      </div>
      <Link to="/"><Button>Inicio</Button></Link>
    </div>
  )
}

export default Compras