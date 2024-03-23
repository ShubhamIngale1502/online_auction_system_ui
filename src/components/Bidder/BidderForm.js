import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function BidderForm() {
    const {register, handleSubmit} = useForm()

    function saveDataToDB(data){
        axios.post('http://127.0.0.1:8000/v1/bidder/',data).then(
            (response)=>{
                if(response.status===201){
                    console.log(data)
                    alert('data added into database')
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div className='container border border-dark border-3'>
        <h1 className='text-center'>Bidder Form</h1>
        <form onSubmit={handleSubmit(saveDataToDB)} className='row g-3 '>
            <select className="form-select" aria-label="Default select example"{...register('bidder_type')}>
                <option selected>Select Bidder Choices</option>
                <option value="automatic">automatic</option>
                <option value="manual">manual</option>
            </select>
            <div className='col-md-8 mb-4'>
                <label for='bidder' className='form-label'>bidder</label>
                <input type='number' className='form-control' id='bidder'{...register('bidder')}/>
            </div>
            <button type='submit' className='btn btn-success col-6 m-auto'>Add</button>
        </form>
    </div>
  )
}

export default BidderForm