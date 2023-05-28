import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react'
import { ProductContext, useProductContext } from '../context/ProductContext'

const Buscador = () => {

  const { pedales, setBusqueda } = useProductContext(ProductContext);
  console.log(pedales);

  /*  const [searchPedal, setSearchPedal] = useState(""); */


  const handleInputBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div>
      <Form className="buscador">
        <InputGroup className="buscador-input">
          <Form.Control
            type="search"
            placeholder="Escribe tu búsqueda..."
            aria-describedby="basic-addon2"
            /* value={searchPedal} */
            onChange={handleInputBusqueda}

          />

          {/* {<Button
            type="search"
            variant="outline-secondary"
            id="button-addon2"
          >
            Buscar
          </Button>} */}
        </InputGroup>
      </Form>
      console.log(setBusqueda);
    </div>
  )
}

export default Buscador