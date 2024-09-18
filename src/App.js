import './App.css';
import Form from './components/Form'
import Table from './components/Table'
import {useState, useEffect} from 'react'

function App() {
  const [bookState, setBookState] = useState([])

  const handleformSubmit = (book) => {
    setBookState([...bookState, book])
  }

  useEffect(() => {
    setBookState([
      {
        title: 'Eloquent JavaScript, Third Edition',
        author: 'Marijn Haverbeke',
        genres: 'Programacion',
        published: '2018-12-04',
        publisher: 'No Starch Press',
        pages: '472'
      },
      {title: 'Practical Modern JavaScript', author: 'Nicolás Bevacqua', genres: 'Programacion', published: '2017-07-16', publisher: 'O`Reilly Media', pages: '334'},
      {title: 'You Don`t Know JS Yet', author: 'Kyle Simpson', genres: 'Programacion', published: '2020-01-28', publisher: 'Publicacion Idependiente', pages: '143'},
    ])
  }, [])

  return (
    <div className="App">
      <div className='container'>
        <Form handleformSubmit={handleformSubmit}/>
        <Table data={bookState}/>
      </div>
    </div>
  );
}

export default App;