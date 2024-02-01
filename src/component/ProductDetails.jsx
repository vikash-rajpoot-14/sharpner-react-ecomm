import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import { Context } from '../App';
import { AuthContext } from '../store/Context';

function ProductDetails() {
    const { cart, setCart } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const authCtx = useContext(AuthContext);
    console.log("cart", cart)

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

    const handleCart = async (prod) => {
        setLoading(true)
        // console.log("email",authCtx.email)
        const userid = authCtx.email.split("@")[0]
        const res = await fetch(`https://crudcrud.com/api/8ad9518804a44ccc94e0e45665191533/${userid}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prod)
        })
        const data = await res.json();
        setLoading(false)
        setCart((prev)=>{
            data.quantity = 1;
            let flag = false;
            prev.forEach(item => {
                if (item.id === prod.id) {
                    flag = true;
                    item.quantity += 1;
                }
            })
            if (!flag) {
                return [...prev, data]
            }else{
                 return [...prev]
            }
        })
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
                        <button onClick={() => handleCart(product)} className='bg-sky-500 p-2 w-28 rounded text-white'>{loading ? "Adding..." : "Add to Cart"}</button>
                    </div>
                </div>)}
        </div>
    )
}

export default ProductDetails
