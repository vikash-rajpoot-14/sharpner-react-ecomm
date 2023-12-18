import React from 'react'

function Cart({togglecart,setTogglecart}) {

 const handletoggle = ()=>{
    setTogglecart(!togglecart)
  }

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
        <div className='p-4'>
            datasncnsjc
        </div>
        <button  className='bg-sky-500 hover:bg-sky-400 rounded-md p-3'>Add to Purchase</button>
    </div>
  )
}

export default Cart
