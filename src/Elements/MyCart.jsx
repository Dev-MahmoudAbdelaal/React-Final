import React, { useContext, useEffect } from 'react';
import './ElementsCss/MyCartCss.css';
import { ProductContext } from '../Context/ProductContext';
import { CartContext } from '../Context/CartContext';

export default function MyCart() {
  const { products } = useContext(ProductContext);
  const { cartList , setCartList } = useContext(CartContext);
  const newList=[]
  function getProductById(id) {
    return products.find((product) => product.id === id);
  }
  const remove=(id)=>{
    setCartList(cartList.filter((item) => item != id))
    console.log("cart id " + id)

  }
  useEffect(()=>{
    console.log("cart remove " + cartList)
  },[cartList])
  return (
    <>
    <div className='container'>
      {cartList.map((productId) => {
        const product = getProductById(productId);
        return (
          <div key={productId} className='main-container'>
            <div>
              <img src={product.image} alt='' />
            </div>
            <div className='div-details'>
              <span className='h1-title'>{product.title}</span>
              <br />
              <span className='h2-normal'>{product.description}</span>
              <br />
              <span className='h2-big'>{product.price}</span>
              <br />
              <button className='bg-danger' style={{border:"none",width:"110%" ,color:'white',height:'20%'}} onClick={()=>{remove(product.id)}}>Remove From Cart</button>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}