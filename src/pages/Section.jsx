import React from 'react'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Section = () => {
  return (
    <Form className="footer-section">
      {/* <p>Section</p> */}
      <div>
        <h5 className="footer-section-titulo">Nosotros</h5>
        <div className="footer-section-titulo-enlaces">
          <p>Historia</p>
          <p>Sucursal</p>
          <p>Blog</p>
        </div>
      </div>
      <div>
        <h5 className="footer-section-titulo">Atención al cliente</h5>
        <div className="footer-section-titulo-enlaces">
          <p>Política devoluciones</p>
          <p>Garantía Extendida</p>
          <p>Asistencia</p>
        </div>
      </div>
      <div>
        <h5 className="footer-section-titulo">Productos</h5>
        <div className="footer-section-titulo-enlaces">
          <p>Ofertas</p>
          <p>Marcas</p>
          <p>Servicio Técnico</p>
        </div>
      </div>
      <div>
        <h5 className="footer-section-titulo">Síguenos</h5>
        <div className="footer-section-titulo-enlaces">
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
    </Form>
  )
}

export default Section