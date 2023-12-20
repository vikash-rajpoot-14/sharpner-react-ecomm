import React, { useContext, useEffect, useState } from 'react'
import Card from './Card.jsx'
import { Context } from '../App.jsx'
import Loader from './Loader.jsx'

// const productsArr = [
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//   },
//   {
//     title: 'Blue Color',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//   }
// ]
// const fetcher = async () => {
//   const response = await fetch('https://swapi.dev/api/films/')
//   const data = await response.json()
//   return data.results
// }

function Music() {
  // const { data, error } = useSWR('movies', fetcher)
  const context = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  const handletoggle = () => {
    context.setTogglecart(!context.togglecart)
  }
  console.log(movies)
  useEffect(() => {
    async function fetchresult() {
      try {
        setLoading(true)
        const res = await fetch('https://swapi.dev/api/films/')
        const result = await res.json()
        setMovies(result.results)
        setLoading(false)
      } catch (error) {
        setLoading(true)
        throw new Error(error)
      }
    }
    fetchresult()
  }, [])

  return (
    <div className='w-fit m-auto '>
      <div className=' font-bold text-center my-7'>
        <p className='text-6xl mb-16 font-serif'>Music</p>
      </div>
      {!loading &&
        <ul className='grid  gap-40 grid-cols-1 xl:grid-cols-2 '>
          {movies?.map((el, index) => <Card key={index} data={el} />)}
        </ul>
      }
      <div className='mb-8 flex items-center justify-center'>
        {loading && <Loader />}
      </div>
      <div className='text-center m-4'>
        <button onClick={handletoggle} className='text-lg p-2 text-center rounded-md bg-slate-300 text-blue-500'>see the cart</button>
      </div>
    </div>
  )
}

export default Music
