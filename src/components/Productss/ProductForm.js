import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
function ProductForm() {
    const {register, handleSubmit} = useForm()
    const nav = useNavigate()

    function saveDataToDB(data){
        data.p_images = data.p_images[0]
        console.log(data)
        axios.post('http://127.0.0.1:8000/v1/product/',data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(
            (response)=>{
                if(response.status===201){
                    nav('/product')
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div className='container border border-success border-3'>
        <h1 className='text-center'>Product Add Form </h1>
        <form onSubmit={handleSubmit(saveDataToDB)} className='row g-3 '>
                <div className='col-md-6'>
                    <label for='product_name' className='form-label'>Product Name:-</label>
                    <input type='text' className='form-control' id='product_name'{...register('product_name')}/>
                </div>
                <div className='col-md-6'>
                    <label for='product_description' className='form-label'>Product Description:-</label>
                    <input type='text' className='form-control' id='product_description'{...register('product_description')}/>
                </div>
                <div className='col-md-6'>
                     <label for='product_manufacture_year' className='form-label'>Product Manufacture Year:-</label>
                    <input type='number' className='form-control' id='product_manufacture_year' placeholder='Only year added'{...register('product_manufacture_year')}/>
                </div>
                <div className='col-md-6'>
                    <label for='product_base_price' className='form-label'>Product Base Price:-</label>
                    <input type='number' className='form-control' id='product_base_price'{...register('product_base_price')}/>
                </div>
                <div className='col-md-6'>
                    <label for='p_images' className='form-label'>Product Images:-</label>
                    <input type='file' className='form-control' id='p_images'{...register('p_images')} multiple/>
                </div>
                <div className='col-md-6 mb-3'>
                    <label for='owner' className='form-label'>owner:-</label>
                    <input type='number' className='form-control' id='owner'{...register('owner')}/>
                </div>
                <button type='submit' className='btn btn-success col-6 m-auto'>Add</button>
        </form>
    </div>
  )
}

export default ProductForm