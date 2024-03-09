import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/slices/CartSlice';
import { CartContext } from '../Context/CartContext';

export default function MyCard({product}) {
  const {id,image,title,description,price,myCount}=product
  const dispatch =useDispatch()
  const {cartCount} = useSelector((state) =>state.Cart);
  const {cartList,setCartList}=useContext(CartContext);
  const itemForContext={id,image,title,description,price}
  const add=()=>{
    dispatch(increment())
    
    setCartList([...cartList,id])
  }
  const remove=()=>{
    dispatch(decrement())
  }
  // useEffect(() => {
    
  //   return () => {
      
  //     setCartList(listForContext);
  //   };
  // }, []);
  return (
    <div>
        <Card style={{ width: '18rem',backgroundColor:'#1c1e21' }}>

            <Card.Img variant="top" src={image} style={{width:"100%"}}/>
            <Card.Body>
            <Card.Title>
            <span className='' style={{color:"white" }}  >
            {title}
            <br />
            
            </span>
              </Card.Title>
            <Card.Text style={{display:"none"}}>
               {description}
            </Card.Text>
            <span className='' style={{color:"white"  ,cursor:"pointer" ,marginBottom:"30px"}}  >
              {price}
            </span>
            <br />
            <div style={{display:'flex',alignItems:'center'}}>
            {cartCount>0? <Button className='bg-black' style={{border:"none"}} onClick={add}>Add to Cart</Button>
              : <Button className='bg-black' style={{border:"none",width:"100%"}} onClick={add}>Add to Cart</Button>}
              {cartCount>0? <div className="myCart" style={{marginLeft:'10%'}}>
                  <FaShoppingCart style={{color:'white'}}/>
                  <span className='cartCounter'>{cartCount}</span>
              </div>:""}
              {cartCount>0?   <Button  onClick={remove} className='px-2 bg-danger border-0 ' variant="primary">Remove</Button>:""}
            </div>
            </Card.Body>
        </Card>
  </div>
  )
}
