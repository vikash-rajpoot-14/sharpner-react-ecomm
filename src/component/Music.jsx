import React from 'react'
import Card from './Card.jsx'

const productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

function Music({togglecart,setTogglecart}) {

  const handletoggle = ()=>{
    setTogglecart(!togglecart)
  }

  return (
    <div className='w-fit m-auto '>
      <div className=' font-bold text-center my-7'>
        <p className='text-6xl mb-16 font-serif'>Music</p>
      </div>
        <ul className='grid  gap-40 grid-cols-1 xl:grid-cols-2 '>
          {productsArr?.map((el,index)=> <Card key={el.imageUrl} data={el}/>)}
        </ul>
          <div className='text-center m-4'>
            <button onClick={handletoggle} className='text-lg p-2 text-center rounded-md bg-slate-300 text-blue-500'>see the cart</button>
          </div>
    </div>
  )
}

export default Music
