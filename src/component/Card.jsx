import React, { useContext } from 'react'
import { Context } from '../App.jsx'
import { useNavigate } from 'react-router-dom'



function Card({ data }) {
  const navigate = useNavigate();
  const context = useContext(Context)
  const handleDetails = ()=>{
      navigate(`/store/${data.id}`)
  }
  
  return (
    <div className='w-72 overflow-hidden flex items-center flex-col justify-center h-fit border-2 border-gray-500 p-3 m-3 rounded-sm'>
      <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{data.title}</div>
      <img className='w-36 h-36 ' src={data.image} alt={data.title}  />
      <div><b>price:</b> {data.price}</div>
      <button onClick={(()=>handleDetails(data))} className='bg-blue-400  text-white font-semibold rounded-md p-2 mt-2'>More Details</button>
    </div >
  )
}

export default React.memo(Card)
