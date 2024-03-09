import React from 'react'
import MyCard from './MyCard'
import './ElementsCss/MainPageCss.css'

export default function MyFeature() {
  const products=[
    {id:1,image:"product1.jpg",title:"Epic Future 3",description:"good game",price:"$49.00"},
    {id:2,image:"product2.jpg",title:"PFL 2019",description:"good game",price:"$120.00"},
    {id:3,image:"product3.jpg",title:"Proto Speed",description:"good game",price:"$49.00"},
    {id:4,image:"product4.jpg",title:"War 2",description:"good game",price:"$119.00"}
  ]
  return (
      <div className=" page-container my-4 p-5 " >
        <span className='display-6'>Featured Product</span>
              <div className="card-container ">
                  {
                      products.map((product)=>(
                          <MyCard
                              key={product.id} 
                              product={product}
                              // image={product.image}
                              // title={product.title} 
                              // description={product.description} 
                              // price={product.price}
                          />
                      ))
                  }
              </div>
      </div>
  )
}
