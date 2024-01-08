import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { Context } from '../App';
import { AuthContext } from '../store/Context';

function ProductDetails() {
    const {cart,setCart} = useContext(Context)
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const authCtx = useContext(AuthContext);
    // console.log(cart)
    console.log(authCtx)

    useEffect(() => {
        async function movieDetails() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const result = await res.json()
                setProduct(result)
            } catch (error) {
                console.log("error", error)
            }
        }
        movieDetails();
    }, [id])
    
    const handleCart = async (prod)=>{
        console.log("email",authCtx.email)
        const userid = authCtx.email.split("@")[0]
      const res = await fetch(`https://crudcrud.com/api/6952af5869db4285a6b837c98236f2b0/${userid}`,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json' },
        body : JSON.stringify(prod)
      })
      const data = await res.json();
      console.log("details: " , data)
    }

    return (
        <div className='m-8 p-4 flex justify-center items-center'>
            {!product ? <Loader /> : (
                <div>
                    <div className='p-2 mb-2 text-lg font-semibold flex justify-center italic '>{product.title}</div>
                    <div className='flex gap-4'>
                        <div className=''>
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                            <img className='w-16 h-16 ' src={product.image} alt={product.title} />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-72 h-72' src={product.image} alt={product.title} />
                            <div className='text-2xl'><b>$ {product.price}</b></div>
                        </div>
                        <div className='w-72 h-fit '>
                            <div className='m-4'><b className='mr-1'>category:</b> {product.category}</div>
                            <div className='m-4'><b className='mr-1'>rating:</b>{product.rating.rate}</div>
                            <div className='m-4'><b className='mr-1'>remaining:</b>{product.rating.count}</div>
                            <div className='m-4'><b className='mr-1'>description:</b> {product.description}</div>
                        </div >
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={()=>handleCart(product)} className='bg-sky-500 p-2 rounded text-white'>Add to Cart</button>
                    </div>
                </div>)}
        </div>
    )
}

export default ProductDetails
