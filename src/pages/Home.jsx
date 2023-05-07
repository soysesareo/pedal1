import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Newsletter from './Newsletter';
import Section from './Section';
import Clientes from './Clientes';
import Buscador from './Buscador';



const Home = () => {
  const { pedales, setPedales, addPedal } = useProductContext();

  const handleClicPedal = ({pedales}) => {

    addPedal(pedales)
  };

  return (
    <>
      {/* <Container className="container"> */}
      <Buscador />
      {/* <p>Home</p> */}
      <div className='grilla'> {
        pedales.map((pedal) => (
          <Card key={pedal.id} style={{ width: '14rem' }}>
            <Card.Title className="tarjeta-titulo">{pedal.brand} {pedal.name} </Card.Title>
            <Card.Img variant="top" src={pedal.img} alt={pedal.name} />
            <Card.Body>
              {/* <Card.Title>{pedal.brand} {pedal.name} </Card.Title> */}
              <Card.Text className="tarjeta-precio">
                {/* {pedal.description} */}
                ${pedal.price}
              </Card.Text>
              <Link className="boton-detalles" to={`/detalles `}>
                <Button
                  variant="success"
                  /* onClick={() => handleClicPedal(pedales)} */
                  >Detalles
                </Button></Link>
              <Link className="boton-comprar" to={`/compras `} ><Button variant="success">Comprar</Button></Link>
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