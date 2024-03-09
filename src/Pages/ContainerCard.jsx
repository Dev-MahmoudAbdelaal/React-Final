import React, { useContext } from 'react'
import '../Elements/ElementsCss/ContainerCardCss.css'
import MyCard from '../Elements/MyCard'
import { ProductContext } from '../Context/ProductContext';

export default function ContainerCard() {
    const {products,setProducts}=useContext(ProductContext);
    // const products=[
    //     {id:1,image:"product5.jpg",title:"Gas Station 5",description:"good game",price:"$49.00"},
    //     {id:2,image:"product6.jpg",title:"GodS 5",description:"good game",price:"$55.00"},
    //     {id:3,image:"product7.jpg",title:"War 3",description:"good game",price:"$59.00"},
    //     {id:4,image:"product9.jpg",title:"Need For Race",description:"good game",price:"$64.00"},
    //     {id:5,image:"product1.jpg",title:"Epic Future 3",description:"good game",price:"$49.00"},
    //     {id:6,image:"product2.jpg",title:"PFL 2019",description:"good game",price:"$120.00"},
    //     {id:7,image:"product3.jpg",title:"Proto Speed",description:"good game",price:"$49.00"},
    //     {id:8,image:"product4.jpg",title:"War 2",description:"good game",price:"$119.00"},
    //     {id:9,image:"slider1.jpg",title:"Epic Future 2",description:"good game",price:"$40.00"},
    //     {id:10,image:"slider2.jpg",title:"Mistik World 3",description:"good game",price:"$52.00"},
    //     {id:11,image:"slider3.jpg",title:"Gun Machine 6",description:"good game",price:"$50.00"},
    //     {id:12,image:"slider4.jpg",title:"Destruction 3",description:"good game",price:"$47.00"}
    // ]
  return (
    <>
        <div className='myBanner mx-auto' >
            <img src="./banner0.jpg" alt=""  />
            <span className='title-text'> YOU CAN BE OUR GAME'S BETA <br />NOW AVAILABLE PRE_ORDER</span>
            <button>PRE_ORDER NOW</button>
        </div>
        <div className="myContainer">
            <div className='container-card'>
                {
                    products.map((product)=>(
                        <MyCard
                            key={product.id} 
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    </>
  )
}
