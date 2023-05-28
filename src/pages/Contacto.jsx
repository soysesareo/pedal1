import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useFormik } from 'formik';

const Contacto = () => {

  /* const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName:'',
      email: '',
      message:'',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  }); */

  const [formStatus, setFormStatus] = React.useState('Enviar')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div>
      {/* <p style={{color: 'red', textAlign: 'center'}}>¡Hablemos!</p>
      <p style={{color: 'red', textAlign: 'center'}}>Dejanos tu mensaje, te contactaremos a la brevedad posible</p> */}
      {/* <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">Nombre: </label>
            <Field name="name" />

            <label htmlFor="email">Correo Electrónico: </label>
            <Field name="email" />

            <label htmlFor="message">Mensaje: </label>
            <Field name="message" component="textarea" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik> */}
      {/* <br /><br /> */}
      {/* <div className="contacto-formulario" style={{textAlign: 'center'}}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label htmlFor="email">Apellido</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="message">Mensaje</label>
          <input
            id="message"
            name="message"
            type="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <button type="submit">Enviar</button>
        </form>
      </div> */}
      {/* <br /><br /> */}
      <div className="contacto-formulario">
        <div className="container pt-3 py-3">
          {/* <h2 className="mb-3">React Contact Form Component Example</h2> */}
          <h5 style={{ color: '#A72C38', textAlign: 'center' }}>Déjanos tu mensaje</h5>
          <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Te contactaremos a la brevedad posible</h6>
          <br />
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Nombre
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Correo Electrónico
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Mensaje
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-secondary" type="submit">
              {formStatus}
            </button>
          </form>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Contacto