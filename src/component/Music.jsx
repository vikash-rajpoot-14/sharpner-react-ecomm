import React, { useCallback, useContext, useEffect, useState } from 'react'
import Card from './Card.jsx'
import { Context } from '../App.jsx'
import Loader from './Loader.jsx'


function Music() {
  const context = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [retry, setRetry] = useState(true)

  const handletoggle = () => {
    context.setTogglecart(!context.togglecart)
  }

  const fetchresult = useCallback(async ()=> {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('https://fakestoreapi.com/products')
      const result = await res.json()
      console.log("object",result)
      setMovies(result)
      setLoading(false)
    } catch (error) {
      setLoading(true)
      setError(error.message)
      setLoading(false)
      retryApi()
    }},[loading,movies,error])

  const retryApi = () => {
    setRetry(true)
    setInterval(() => {
      fetchresult()
    }, 10000)
  }

  useEffect(() => {
    if (retry) {
      fetchresult()
    }
  }, [retry])

  const cancelRetry = () => {
    setRetry(false)
    setLoading(false)
  }

  return (
    <div className='w-fit m-auto '>
      <div className=' font-bold text-center my-7'>
        <p className='text-6xl mb-16 font-serif'>Music</p>
      </div>
      {!loading &&
        <ul className='grid m-16  gap-10 grid-cols-1 xl:grid-cols-2 '>
          {movies?.map((el, index) => <Card key={el.id} data={el} />)}
        </ul>
      }
      <div className='mb-8 flex flex-col items-center justify-center'>
        {loading && <Loader />}
        {!loading && error && "Something went wrong ! ...Retrying"}
        {retry && loading && <button onClick={cancelRetry} className='bg-sky-500 hover:bg-slate-400 rounded-lg m-4 p-3'>Cancel Retry</button>}
      </div>
      <div className='text-center m-4'>
        <button onClick={handletoggle} className='text-lg p-2 text-center rounded-md bg-slate-300 text-blue-500'>see the cart</button>
      </div>
    </div>
  )
}

export default Music
