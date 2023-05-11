import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const Login = () => {
  return (
    <div>
      <div className="login-texto">
        {/* <p className="login-texto">Somos la comunidad de los pedales usados</p>
        <p className="login-texto">Si ya estás registrada(o) inicia sesión</p> */}
        <h5 style={{ color: '#BD2F2A', textAlign: 'center' }}>Somos la comunidad de los pedales usados</h5>
        <h6 style={{ color: '#BD2F2A', textAlign: 'center' }}>Si ya estás registrada(o) puedes iniciar sesión</h6>
      </div>
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
          <Form.Text className="text-muted">
            Recuerda que nunca compartiremos tu información
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="secondary" type="submit">
          Iniciar sesión
        </Button>
        {/* <p className="text-start mt-3">
          Recuperar <a href="#">contraseña</a>
        </p> */}
        <p className="mt-3">Recuperar <Alert.Link href="#">contraseña</Alert.Link></p>
      </Form>
    </div>
  )
}

export default Login