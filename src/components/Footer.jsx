import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      {/* <p>Footer</p> */}
      {/* <p className="footer-texto">pedalmanía 2023 | diseño & desarrollo web por <span className="footer-sesareo" a href="https://soysesareo.github.io" target="_blank">soysesareo</span></p> */}

      <div className="footer-texto">pedalmanía <img className="footer-copyright" src="/copyright-svgrepo-com.svg" /> 2023</div>
      {/* <div className="footer-texto">todos los derechos reservados</div> */}
      <div className="footer-texto">desarrollo web por <a className="footer-sesareo" href="https://soysesareo.github.io" target="_blank"><span>soysesareo</span></a></div>

      {/*  <p className="footer-texto"> | desarrollado por @soysesareo</p> */}
    </div>
  )
}

export default Footer