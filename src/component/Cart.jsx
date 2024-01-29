import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.jsx";
import { AuthContext } from "../store/Context.jsx";

function Cart() {
  const context = useContext(Context);
  const authCtx = useContext(AuthContext);
  const [cart ,setCart] = useState([])

  const handletoggle = () => {
    context.setTogglecart(!context.togglecart);
  };
 
  let finalCart = [];
  
  for(let prod of cart){
    for(let i=0;i<finalCart.length;i++){
      if(finalCart[i].id === prod.id){
        finalCart[i] = {...finalCart[i], quantity:finalCart[i].quantity + 1 }
      }else{
        finalCart.push({...prod,quantity : 1})
      }
    }
  }

  useEffect(() => {
    async function fetchdata() {
      const userid = authCtx.email?.split("@")[0];
      const res = await fetch(
        `https://crudcrud.com/api/dfdf793840ab471cac09cc20c4c78147/${userid}`);
      const data = await res.json();
       setCart(data)
    }
    fetchdata();
  }, [authCtx.email]);

  return (
    <div className="flex flex-col p-2">
      <div className="flex ">
        <p className="flex-1 text-lg italic text-center">Cart</p>
        <button
          onClick={handletoggle}
          className="px-1 border-sky-500 border-2 rounded-lg"
        >
          X
        </button>
      </div>
      <ul className="flex  ">
        <li className="p-4  underline underline-offset-4">Item</li>
        <li className="p-4 underline  underline-offset-4">Price</li>
        <li className="p-4  underline  underline-offset-4">Quauntity</li>
      </ul>
      <ul>
        {finalCart?.map((product, idx) => (
          <li className="flex p-2" key={product._id}>
            <p className="w-16">{product.title}</p>
            <p className="px-4">{product.price}</p>
            <p className="px-4">{product.quantity}</p>
          </li>
        ))}
      </ul>
      <button className="bg-sky-500 hover:bg-sky-400 rounded-md p-3">
        Add to Purchase
      </button>
    </div>
  );
}

export default Cart;
