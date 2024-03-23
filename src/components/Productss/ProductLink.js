import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ProductLink() {
    const {id} = useParams()
    const [products, SetProduct] = useState({})

    function getDataFromDB(){
      axios.get(`http://127.0.0.1:8000/v1/product/${id}/`).then(
          (response)=>{
              if(response.status===200){
                  SetProduct(response.data)
                  console.log(response.data)
              }else{
                  alert('No post on database')
              }
          }
      ).catch(
          (error)=>{
              console.log(error)
          }
      )
  }
  useEffect(()=>{
      getDataFromDB()
  },[])
  return (
    <div className='container border border-dark border-3 w-50 text-center'>
      <h3>* All Details Select Product *</h3>
      <hr></hr>
      <h6 >Product ID:- {products.product_id}</h6> 
      <h6 >Product Name:- {products.product_name}</h6>
      <h6 >Product Description:- {products.product_description}</h6>
      <h6 >Product Manufacture Year:- {products.product_manufacture_year}</h6>
      <h6 >Product Base Price:- {products.product_base_price}</h6>
      <h6 >Owner:- {products.owner}</h6>
      <div>
      { products.product_images&&products.product_images.map((p_image)=>{return(
          <img src={`http://localhost:8000${p_image.product_image}`} height='300px'/>
        )})}
                                    
      </div>
    </div>
  )
}

export default ProductLink