import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCo = () => {
  const [products, SetProduct] = useState([])

    function getDataFromDB(){
        axios.get('http://127.0.0.1:8000/v1/product/').then(
            (response)=>{
                if(response.status===200){
                    SetProduct(response.data)
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
    products.map(
      (pro)=>{
        return(<>
          { pro.product_images.map( (p_image)=>{return(
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active w-50">
                <img src={`http://localhost:8000${p_image.product_image}`}  className='d-block w-100' alt="Product Image"/>
                <h6 className='text-center'>Product id:-{pro.product_id}</h6>
                <h6 className='text-center'>Product Name:-{pro.product_name}</h6>
                <h6 className='text-center'>Product Description:-{pro.product_description}</h6>
                <h6 className='text-center'>Product Manufacture Year:-{pro.product_manufacture_year}</h6>
                <h6 className='text-center'>Product Base Price:-{pro.product_base_price}</h6>
                <h6 className='text-center'>Owner:-{pro.owner}</h6>
              </div>
    
            </div>
          </div>
       ) })}
        </>)
      }
    )
    
  )
}

export default ProductCo;