import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [dummyMovies, setDummyMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [retry, setRetry] = useState(true)

  
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
  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList loading={loading} movies={dummyMovies} />
        {!loading && error && "Something went wrong ! ...Retrying"}
        {retry && loading && <button onClick={cancelRetry} >Cancel Retry</button>}
      </section>
    </React.Fragment>
  );
}

export default App;







