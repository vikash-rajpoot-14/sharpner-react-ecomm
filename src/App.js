import React, { createContext, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
export let Context = createContext(null)

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [retry, setRetry] = useState(true)
  const [formdata, setFormData] = useState({})
  const [movies, setMovies] = useState([])



  useEffect(() => {
    async function fetchMovies() {
      setLoading(true)
      try {

        const res = await fetch("https://movies-5dbce-default-rtdb.firebaseio.com/movies.json")
        const data = await res.json()
        setLoading(false)
        for(let key in data) {
          movies.push({
           id: key,
           title: data[key].title,
           openingText: data[key].openingText,
           releaseDate: data[key].releaseDate
          })
        }
     setMovies(movies)
      } catch (error) {
        setError(error.message)
        console.log("error", error)
      }
    }
    fetchMovies()
  }, [])


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.id]: e.target.value
    }))
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch("https://movies-5dbce-default-rtdb.firebaseio.com/movies.json", {
        method: "Post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      })
      const data = await res.json()
      setLoading(false)
      console.log("data", data)
    } catch (error) {
      console.log("error", error)
    }

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
            <button type='submit'>{loading ? "Uploading" : "Add Movie"}</button>
          </div>
        </form>
      </section>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <Context.Provider value={{loading,setLoading}}>
        <MoviesList loading={loading} movies={movies} />
        {!loading && error && "Something went wrong ! ...Retrying"}
        {/* {retry && loading && <button >Cancel Retry</button>} */}
        </Context.Provider>
      </section>
    </React.Fragment>
  );
}

export default App;







