import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Auction() {
  const [products, SetProduct] = useState([])

  function getDataFromDB(){
    axios.get('http://127.0.0.1:8000/v1/scedule/').then(
      (responce)=>{
        if(responce.status===200){
          SetProduct(responce.data)
          console.log(responce.data)
        }else{
          alert('no post on database')
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
    <table className='table table-dark'>
        <thead>
            <tr>
                <th> product </th>
                <th>auction_id</th>
                <th>auction_date</th>
                <th>auctio_start_time</th>
                <th>auctio_end_time</th> 
                <th>increment_amount</th>
            </tr>
        </thead>
        <tbody className='table-dark'>
            {
              products.map(
                (pro)=>{
                  return(
                    <tr>
                      <td>{ pro.product }</td>
                      <td>{ pro.auction_id }</td>
                       <td>{ pro.auction_date }</td>
                      <td>{ pro.auctio_start_time}</td> 
                      <td>{ pro.auctio_end_time }</td>
                      <td>{ pro.increment_amount }</td>
                    </tr>
                  )
                } 
              )
            }
        </tbody>
    </table>
  )
}

export default Auction