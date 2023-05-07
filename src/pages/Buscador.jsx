import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'


const Buscador = () => {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet = async () =>{
    const res = await fetch("pedales.json")
    const data = await res.json()
      setUsuarios(data);
      setTablaUsuarios(data);
  };
  
  const handleChange= e =>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }
  
  useEffect(()=>{
  peticionGet();
  },[])
  

  return (
    <Form className="buscador">
      <InputGroup className="buscador-input">
        <Form.Control
          placeholder="Escribe tu búsqueda..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {/* <Button variant="outline-dark" id="button-addon2"> */}
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
    </Form>
  )
}

export default Buscador