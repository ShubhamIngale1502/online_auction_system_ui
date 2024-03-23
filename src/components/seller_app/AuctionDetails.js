import axios from 'axios'
import React from 'react'
import {useForm} from  "react-hook-form";
import {useNavigate} from  "react-router-dom";

function AuctionDetails() {
    const {register, handleSubmit} = useForm()
    const nav = useNavigate()

    function saveDataToDB(data){
        axios.post('http://127.0.0.1:8000/v1/scedule/',data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(
            (response)=>{
                if (response.status === 200){
                    nav('/scedule')
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div className='container'>
        <h1 className='text-center'>Auction Details Form</h1>
        <form  onSubmit={handleSubmit(saveDataToDB)} className="row g-3 p-3 w-50 text-center mx-auto text-dark fs-7">
            <div className='col-md-6'>
                <lebel for='product' className='form-lable'>Product Name : </lebel>
                <input type='number' className='form-control' id ='product' {...register('product')}></input>
            </div>
            <div className='col-md-6'>
                <lebel for='auction_date' className='form-lable'>Auction Date : </lebel>
                <input type='date' className='form-control' id ='auction_date'{...register('auction_date')}></input>
            </div>
            <div className='col-md-6'>
                <lebel for='auction_start_time' className='form-lable'>Auction Start Time : </lebel>
                <input type='time' className='form-control' id ='auction_start_time'{...register('auction_start_time')}></input>
            </div>
            <div className='col-md-6'>
                <lebel for='auction_end_time' className='form-lable'>Auction End Time  : </lebel>
                <input type='time' className='form-control' id ='auction_end_time'{...register('auction_end_time')}></input>
            </div>
            <div className='col-md-6'>
                <lebel for='increment_amount' className='form-lable'>Increment Amount : </lebel>
                <input type='number' className='form-control' id ='increment_amount'{...register('increment_amount')}></input>
            </div>
            <button type='submit' className='btn btn-success col-6 m-auto'>ADD</button>
        </form>

    </div>
        
   
  )
}

export default AuctionDetails