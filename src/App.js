import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [dummyMovies, setDummyMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [retry, setRetry] = useState(true)
  const [formdata, setFormData] = useState({})

  console.log("dummyMovies",dummyMovies)

  async function fetchresult() {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('https://swapi.dev/api/films/')
      const result = await res.json()
      setDummyMovies(result.results)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message)
      retryApi()
    }
  }
  const retryApi = () => {
    setInterval(() => {
      fetchresult()
    }, 5000)
  }

  useEffect(() => {
    if (retry) {
      fetchresult()
    }
  }, [retry])

  const cancelRetry = () => {
    setRetry(false)
  }

  const handleChange = (e) => {
    setFormData((prev)=>({
      ...prev,[e.target.id]:e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formdata);
    console.log(dummyMovies)
    setDummyMovies((prev)=> [...prev,formdata])
  }
  
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label>Title</label>
            <input id='title' onChange={handleChange} type='text' />
          </div>
          <div className='input'>
            <label>opening Text</label>
            <textarea id='openingText' onChange={handleChange} rows={6} cols={50} />
          </div>
          <div className='input'>
            <label>release Date</label>
            <input onChange={handleChange} id='releaseDate' type='text' />
          </div>
          <div>
            <button type='submit'>Add Movie</button>
          </div>
        </form>
      </section>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        {/* <MoviesList loading={loading} movies={dummyMovies} /> */}
        {!loading && error && "Something went wrong ! ...Retrying"}
        {retry && loading && <button onClick={cancelRetry} >Cancel Retry</button>}
      </section>
    </React.Fragment>
  );
}

export default App;







