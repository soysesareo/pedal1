import React, { useState } from 'react'
/* import { useContext } from 'react'; */
/* import { useProductContext } from '../context/ProductContext'; */
import { ProductContext, useProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const Login = () => {
  const { user } = useProductContext(ProductContext);
  /* console.log(user); */

  const { login } = useProductContext(ProductContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = await login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate('/dashboard')
    }
    alert('Datos incorrectos, vuelva a intentarlo')
  };


  return (
    <div>
      <div className="login-texto">
        {/* <p className="login-texto">Somos la comunidad de los pedales usados</p>
        <p className="login-texto">Si ya estás registrada(o) inicia sesión</p> */}
        <h5 style={{ color: '#A72C38', textAlign: 'center' }}>Somos la comunidad de los pedales usados</h5>
        <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Si ya estás registrada(o) puedes iniciar sesión</h6>
      </div>
      <Form
        className="login"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Recuerda que nunca compartiremos tu información
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
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
        <p className="mt-3">Si aún no tienes tu cuenta <Alert.Link href="#"><Link to="/registro">regístrate acá</Link></Alert.Link></p>
      </Form>
    </div>
  )
}

export default Login