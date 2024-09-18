import React, {useState} from 'react'

const Form = ({handleformSubmit}) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    genres: '',
    published: '',
    publisher: '',
    pages: ''
  })

  const hanldeFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleformSubmit(formState)
  }

  return(
    <form onChange={hanldeFormChange}>
      <h1>Registro</h1>
      <div className='form-body'>
      <div className='form-section'>
        <label>Titulo</label>
        <input type='text' name='title' required placeholder='Ingrese el nombre'/>
      </div>
      <div className='form-section'>
        <label>Autor</label>
        <input type='text' name='author' required placeholder='Ingrese el autor'/>
      </div>
      <div className='form-section'>
        <label>Generos</label>
        <input type='text' name='genres' required placeholder='Ingrese el genero'/>
      </div>
      <div className='form-section'>
        <label>Fecha de Publicacion</label>
        <input type='text' name='published' required placeholder='Ingrese la fecha de publicacion'/>
      </div>
      <div className='form-section'>
        <label>Editorial</label>
        <input type='text' name='publisher' required placeholder='Ingrese la editorial'/>
      </div>
      <div className='form-section'>
        <label>Paginas</label>
        <input type='text' name='pages' required placeholder='Ingrese las paginas totales'/>
      </div>
      </div>
      <div className='form-section'>
        <button type='submit' onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  )
}

export default Form