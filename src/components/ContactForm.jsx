import { useState } from 'react'

function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Mensaje:', mensaje)
  }

  const formularioVacio = nombre === '' || email === '' || mensaje === ''

  return (
    <div className="form-container">
      <h2>Formulario de Contacto</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <button type="submit" disabled={formularioVacio}>
          Enviar
        </button>

      </form>

      <div className="preview">
        <h3>Preview en vivo</h3>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mensaje:</strong> {mensaje}</p>
      </div>

    </div>
  )
}

export default ContactForm