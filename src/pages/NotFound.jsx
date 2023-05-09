import React from 'react'
import Container from 'react-bootstrap/Container';

const NotFound = () => {
  return (
    <div className="not-found">
      {/* <img src="src/assets/img/error-404-adobe-3.jpg" alt="error-404" /> */}
      <img src="assets/img/error-404-adobe-2.jpg" alt="error-404" />
      <p className="not-found-texto">¿Qué pachó?</p>
      <p className="not-found-texto">Ch bah puta la güeá, esta página no existe</p>
      {/* <p className="not-found-texto">Esta página no existe</p> */}
      <div>
        {/* <{p>NotFound: Error 404</p>} */}
        {/* <p className="not-found-texto">Lo siento, esta página no existe</p> */}
      </div>
    </div>
  )
}

export default NotFound