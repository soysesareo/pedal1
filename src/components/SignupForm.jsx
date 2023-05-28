import React from 'react'
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
;


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      {/* <p>Newsletter con Formik</p> */}
      <Form onSubmit={formik.handleSubmit}>
       {/*  <label htmlFor="email"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ingrese un correo electrónico"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
          <Button type="submit">Enviar</Button> */}
          
        
      </Form>
      {/* <br /><br /> */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Ingrese su email"
          aria-label="email's user"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Enviar
        </Button>
      </InputGroup>
      
    </>
  )
}

export default SignupForm