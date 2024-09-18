import React from 'react'

const Table = ({data}) => {
  if (data.length === 0) return(<p className='table-container'>No data available.</p>)

  return(
    <table className='table-container'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Generos</th>
          <th>Fecha publicacion</th>
          <th>Editorial</th>
          <th>Paginas</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((book, key) => {
            return(
              <tr key={key}>
                <td>{key}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genres}</td>
                <td>{book.published}</td>
                <td>{book.publisher}</td>
                <td>{book.pages}</td>
              </tr>
            )
          })
        }
      </tbody>
  </table>
  )
}

export default Table