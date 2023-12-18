import React, { useContext } from 'react'
import { Context } from '../App';

function Card({ data }) {
  const context = useContext(Context)
  let cart = context.cart
 const handlecart = (e,data)=>{
    let idx = cart.findIndex(el=>el.title==data.title);
    if(idx>=0){
    cart[idx] = {...cart[idx],price: cart[idx].price + data.price,quantity:cart[idx].quantity + 1}
    context.setCart([...cart])
  }else{
    context.setCart([...cart,{title : data.title,price: data.price,quantity: 1}])
  }
 }
  return (
    <div className='p-3 m-3 rounded-sm'>
      <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{data.title}</div>
      <div className= 'lg:w-52 lg:h-52 w-64 h-64 overflow-hidden'>
      <img src={data.imageUrl} alt={data.title} className=" object-cover  transition-transform duration-500 ease-in-out hover:scale-150 hover:shadow-lg" />
      </div>
      <div className='flex justify-between items-center '>
        <div>$ {data.price}</div>
        <button onClick={(e)=>handlecart(e,data)} className='bg-blue-400 text-white font-semibold rounded-md p-2 mt-2'>add to cart</button>
      </div>
    </div >
  )
}

export default Card
