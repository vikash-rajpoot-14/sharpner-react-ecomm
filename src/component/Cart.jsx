import React, { useContext } from 'react'
import { Context } from '../App.jsx'



function Cart() {
const context = useContext(Context)
let cart = context.cart;
 const handletoggle = ()=>{
  context.setTogglecart(!context.togglecart)
  }
  // console.log(cart)

  return (
    <div className='flex flex-col p-2'>
        <div className='flex '>
        <p className='flex-1 text-lg italic text-center'>Cart</p>
        <button onClick={handletoggle} className='px-1 border-sky-500 border-2 rounded-lg'>X</button>
        </div>
        <ul className='flex  '>
            <li className='p-4  underline underline-offset-4'>Item</li>
             <li className='p-4 underline  underline-offset-4'>Price</li>
             <li className='p-4  underline  underline-offset-4'>Quauntity</li>
        </ul>
        <ul>
            {cart.map((product,idx)=> <li className='flex p-2' key={idx}><p className='w-16'>{product.title}</p><p className='px-4'>{product.price}</p><p className='px-4'>{product.quantity}</p></li>)}
        </ul> 
        <button  className='bg-sky-500 hover:bg-sky-400 rounded-md p-3'>Add to Purchase</button>
    </div>
  )
}

export default Cart
