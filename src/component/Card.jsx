import React from 'react'

function Card({ data }) {
  console.log(data)
  return (
    <div className='p-3 m-3 rounded-sm'>
      <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{data.title}</div>
      <div className= 'lg:w-52 lg:h-52 w-64 h-64 overflow-hidden'>
      <img src={data.imageUrl} alt={data.title} className=" object-cover  transition-transform duration-500 ease-in-out hover:scale-150 hover:shadow-lg" />
      </div>
      <div className='flex justify-between items-center '>
        <div>$ {data.price}</div>
        <button className='bg-blue-400 text-white font-semibold rounded-md p-2 mt-2'>add to cart</button>
      </div>
    </div >
  )
}

export default Card
