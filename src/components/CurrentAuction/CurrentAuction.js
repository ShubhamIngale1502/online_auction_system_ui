import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CurrentAuction() {
  const [products, SetProduct] = useState([])

    function getDataFromDB(){
        axios.get('http://127.0.0.1:8000/v1/current/').then(
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
    <div className='container'>
      <div className='row'>
        <h1 className='text-center border border-dark border-2 p-3 mb-2 bg-secondary text-white text-uppercase'>Know About Product</h1>
      {
        products.map(
          (pro)=>{
            return(
                  <div className='col-md-4 border border-dark border-2 p-3 mb-2 bg-secondary text-white'>
                      <h6 className='text-center'>Current Auction ID:{pro.auction.product.product_name}</h6>
                      <h6 className='text-center'>Auction ID:-{pro.auction.auction_id}</h6>
                      <h6 className='text-center'>Product ID:-{pro.auction.product.product_id}</h6>
                      <h6 className='text-center'>Product Name:-{pro.auction.product.product_name}</h6>
                      <h6 className='text-center'>Product Description:-{pro.auction.product.product_description}</h6>
                      <h6 className='text-center'>Product Manufacture Year:-{pro.auction.product.product_manufacture_year}</h6>
                      <h6 className='text-center'>Product Base Price:-{pro.auction.product.product_base_price}</h6>
                      <h6 className='text-center'>Owner:-{pro.auction.product.owner}</h6>
                      <h6 className='text-center'>Auction Date:-{pro.auction.auction_date}</h6>
                      <h6 className='text-center'>Auctio Start Time:-{pro.auction.auctio_start_time}</h6>
                      <h6 className='text-center'>Auctio End Time:-{pro.auction.auctio_end_time}</h6>
                      <h6 className='text-center'>Increment Amount:-{pro.auction.increment_amount}</h6>
                      <div className='text-center'>
                      { pro.auction.product.product_images.map( (p_image)=>{return(
                        <img src={`http://localhost:8000${p_image.product_image}`} height='100px'/>
                      )})}
                      </div>
                  </div>
              
            )
          }
        )
      }
      </div>
    </div>        
  )
}

export default CurrentAuction