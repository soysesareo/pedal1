import React from 'react'
import { ProductContext, useProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

import Newsletter from './Newsletter';
import Buscador from './Buscador';
import Filtros from './Filtros';


const Home = () => {
  const { pedales, busqueda, searchPedal, setPedales, addPedal } = useProductContext(ProductContext);
  /* const handleAddPedal = (pedales) => {
    addPedal(pedales);
    setPedalesFiltrados(pedales);
  }; */

  console.log(pedales);

  /* Buscador */
  /* const [pedalesFiltrados, setPedalesFiltrados] = useState([]); */


  /* const filtrarPedales = () => {
    const pedalesFiltrados = pedales.filter((pedal) => {
      {
        return pedal.name.includes(busqueda);
      }
    });

    setPedalesFiltrados(pedalesFiltrados);
  };

  useEffect(() => {
    filtrarPedales();
  }, [busqueda]); */


  return (
    <>

      {/* <Container className="container"> */}
      <div className='busquedaFiltro'>
        <Buscador />
        <div className='busquedaFiltroMarca'>
          {/* <FiltrosMarca /> */}
          <Filtros />
        </div>
      </div>
      {/* <p>Home</p> */}

      {/* <div className="searchBar">
        <input
          type="text"
          placeholder='¿Qué buscas...?'
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div> */}

      <div className='grilla'> {

        pedales.filter((pedal) => {
          if (busqueda === "") {
            return pedal;
          } else if (
            pedal.name.toLowerCase().includes(busqueda.toLowerCase())
            || pedal.brand.toLowerCase().includes(busqueda.toLowerCase())
            || pedal.type.toLowerCase().includes(busqueda.toLowerCase())

          ) {
            return pedal;
          }
        })

          .map((pedal) => (
            <Card key={pedal.id} style={{ width: '17rem' }}>
              <Card.Title className="tarjeta-titulo">{pedal.brand} {pedal.name}</Card.Title>
              <Card.Img variant="top" src={pedal.img} alt={pedal.name} />
              <Card.Body>
                {/* <Card.Title>{pedal.brand} {pedal.name} </Card.Title> */}
                <Card.Text className="tarjeta-precio">
                  {/* {pedal.description} */}
                  ${pedal.price}
                </Card.Text>

                <div className="botones-favoritos">
                  <Link className="boton-detalles" to={`/detalles `}>
                    <Button
                      variant="success"
                      onClick={() => handleAddPedal(pedales)}
                    >Detalles
                    </Button>
                  </Link>
                  <Image className="corazon-favorito" src="/heart-svgrepo-com.svg" fluid rounded />
                  <Link className="boton-comprar" to={`/compras `} >
                    <Button
                      variant="success"
                      onClick={() => handleAddPedal(pedales)}
                    >Comprar</Button>
                  </Link>
                </div>
              </Card.Body>
              <br /><br />
            </Card>
          ))
      }
      </div>
      {/* </Container> */}
      {/* <Clientes /> */}
      <Newsletter />
      {/* <Section /> */}
    </>
  )
}

export default Home