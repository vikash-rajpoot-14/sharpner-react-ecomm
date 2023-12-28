import React, { useContext } from 'react'
import { Context } from '../App.jsx'



function Card({ data }) {
  console.log(data)
  const context = useContext(Context)

  return (
    <div className='border-2 border-gray-500 p-3 m-3 rounded-sm'>
      <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{data.title}</div>
      <div><b>Episode_id :</b> {data.episode_id}</div>
      <div>{data.opening_crawl}</div>
      <div className='font-semibold'>Director : {data.director}</div>
      {/* <button onClick={(e) => handlecart(e, data)} className='bg-blue-400 text-white font-semibold rounded-md p-2 mt-2'>add to cart</button> */}
    </div >
  )
}

export default React.memo(Card)
