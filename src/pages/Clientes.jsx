import React from 'react'
import { ProductContext, useProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const Clientes = () => {

  const { clientes, setClientes } = useProductContext(ProductContext);
  console.log(clientes);
  return (
    <section className="clientes">
      <p>Nuestros clientes dicen de nosotros</p>
      <div className="cliente-tarjeta">
        {clientes.map((cliente) => (
          <Card key={cliente.id} style={{ width: '14rem' }}>
            <Card.Text>{cliente.description}</Card.Text>
            <div className="cliente-detalles">
              {/* <Card.Text>{cliente.name}</Card.Text> */}
              <Card.Text>{cliente.social}</Card.Text>
              <Card.Text>{cliente.date}</Card.Text>
            </div>
          </Card>
        ))}
      </div>
      <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/cl1-pexels-photo-1699161.jpeg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/cl2-pexels-photo-379962.jpeg?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/cl3-pexels-photo-894156.webp?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
      </div>
    </section>
  )
}

export default Clientes