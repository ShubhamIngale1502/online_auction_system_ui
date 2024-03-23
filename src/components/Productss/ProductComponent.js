import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'


function ProductComponent() {
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
    <table className='table table-dark'>
        <thead>
            <tr >
                <th>product_id</th>
                <th>product_name</th>
                <th>product_description</th>
                <th>product_manufacture_year</th>
                <th>product_base_price</th>
                <th>owner</th>
                <th>product_verify</th>
                <th>product_image</th>
            </tr>
        </thead>
        <tbody className='table-info'>
            {
                products.map(
                    (pro)=>{
                        return(
                            <tr>
                                <td ><NavLink to={`/product/${pro.product_id}`}>{pro.product_id}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.product_name}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.product_description}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.product_manufacture_year}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.product_base_price}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.owner}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>{pro.product_verify}</NavLink></td>
                                <td><NavLink to={`/product/${pro.product_id}`}>
                                    { pro.product_images.map((p_image)=>{return(
                                        <img src={`http://localhost:8000${p_image.product_image}`} height='100px'/>
                                    )})}
                                    
                                </NavLink></td>
                            </tr>
                        )
                    }
                )
            }
        </tbody>
    </table>
  )
}

export default ProductComponent