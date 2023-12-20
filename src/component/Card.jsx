import React, { useContext } from 'react'
import { Context } from '../App.jsx'



function Card({ data }) {
  console.log(data)
  const context = useContext(Context)
  let cart = context.cart
  //  const handlecart = (e,data)=>{
  //     let idx = cart.findIndex(el=>el.title==data.title);
  //     if(idx>=0){
  //     cart[idx] = {...cart[idx],price: cart[idx].price + data.price,quantity:cart[idx].quantity + 1}
  //     context.setCart([...cart])
  //   }else{
  //     context.setCart([...cart,{title : data.title,price: data.price,quantity: 1}])
  //   }
  //  }
  return (
    <div className='border-2 border-gray-500 p-3 m-3 rounded-sm'>
      <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{data.title}</div>
      <div>Episode_id : {data.episode_id}</div>
      {/* <div className='flex justify-between items-center '> */}
        <div>{data.opening_crawl}</div>
        <div className='text-semibold'>Director : {data.director}</div>
        <button onClick={(e) => handlecart(e, data)} className='bg-blue-400 text-white font-semibold rounded-md p-2 mt-2'>add to cart</button>
      {/* </div> */}
    </div >
  )
}

export default Card
