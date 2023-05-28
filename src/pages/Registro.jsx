import React, { useState } from 'react'
import { ProductContext, useProductContext } from '../context/ProductContext'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Registro = () => {

  const {register} = useProductContext(ProductContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    register(
      {
        id: Date.now(),
        name,
        email,
        password,
        repassword
      }
    )
  };

  return (
    <div>
      <div className="login-texto">
        {/* <p className="login-texto">Somos la comunidad de los pedales usados</p>
        <p className="login-texto">Si ya estás registrada(o) inicia sesión</p> */}
        <h5 style={{ color: '#A72C38', textAlign: 'center' }}>Somos la comunidad de los pedales usados</h5>
        <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Acá podrás registrar tu cuenta de usuaria(o)</h6>
      </div>
      <Form
        className="login"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuaria(o)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repita su contraseña"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Form.Group>

        <div className="registro-texto-boton">
          <Form.Text className="text-muted">
            Recuerda que nunca compartiremos tu información
          </Form.Text>
          <Button variant="secondary" type="submit">
            Registrarme
          </Button>
        </div>


        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="img" placeholder="Ingrese la url de su avatar (opcional)" />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        {/* <p className="text-start mt-3">
          Recuperar <a href="#">contraseña</a>
        </p> */}
        {/* <p className="mt-3">Recuperar <Alert.Link href="#">contraseña</Alert.Link></p> */}
      </Form>



    </div>
  )
}

export default Registro