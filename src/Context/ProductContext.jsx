import { createContext, useEffect, useState } from "react";

export  const ProductContext=createContext(null);
export const ProductProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const productsArry=[
        {id:1,image:"product5.jpg",title:"Gas Station 5",description:"good game",price:"$49.00",myCount:0},
        {id:2,image:"product6.jpg",title:"GodS 5",description:"good game",price:"$55.00",myCount:0},
        {id:3,image:"product7.jpg",title:"War 3",description:"good game",price:"$59.00",myCount:0},
        {id:4,image:"product9.jpg",title:"Need For Race",description:"good game",price:"$64.00",myCount:0},
        {id:5,image:"product1.jpg",title:"Epic Future 3",description:"good game",price:"$49.00",myCount:0},
        {id:6,image:"product2.jpg",title:"PFL 2019",description:"good game",price:"$120.00",myCount:0},
        {id:7,image:"product3.jpg",title:"Proto Speed",description:"good game",price:"$49.00",myCount:0},
        {id:8,image:"product4.jpg",title:"War 2",description:"good game",price:"$119.00",myCount:0},
        {id:9,image:"slider1.jpg",title:"Epic Future 2",description:"good game",price:"$40.00",myCount:0},
        {id:10,image:"slider2.jpg",title:"Mistik World 3",description:"good game",price:"$52.00",myCount:0},
        {id:11,image:"slider3.jpg",title:"Gun Machine 6",description:"good game",price:"$50.00",myCount:0},
        {id:12,image:"slider4.jpg",title:"Destruction 3",description:"good game",price:"$47.00",myCount:0}
    ]
    useEffect(()=>{
        setProducts(productsArry)
      },[])
    return(
        <ProductContext.Provider value={{products,setProducts}}>{children}</ProductContext.Provider>
    )
}