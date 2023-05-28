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
      <div className="compras">
        <h5 className="compras-titulo">Éstas son tus compras</h5>
        {/* <p>Acá están tus compras</p> */}
        <div className="compras-tarjeta">
          {
            compras.map((compra, id) => (
              <div key={id}>
                <img height={"85px"} src={compra.img} alt={compra.name} />
                <h6>Marca {compra.brand}</h6>
                <h6>Nombre {compra.name}</h6>
                <div>
                  <h6>Precio {compra.price}</h6>
                </div>
              </div>
            ))
          }
        </div>
        {/*  <Link to="/"><Button>Inicio</Button></Link> */}
        <Link className="logout-boton" to={`/Login `} >
          <Button
            variant="secondary"
            value="Reload Page"
            onClick="window.location.reload(true)"
          >Cerrar Sesión</Button>
        </Link>
        <br />
      </div>
    </div>
  )
}

export default Compras