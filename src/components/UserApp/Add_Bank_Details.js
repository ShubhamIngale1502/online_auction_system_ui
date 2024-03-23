import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add_Bank_Details() {

    const {register, handleSubmit, reset, formState:{errors}, setValue} = useForm()
    const nav = useNavigate()
    const [users, setUsers] = useState([])

    function getBankDetails(event){
        const value = event.target.value
        if(value.length===11){
            axios.get(`https://ifsc.razorpay.com/${value}`).then(
                (response)=>{
                    console.log(response)
                    setValue('bank_name', response.data.BANK)
                    setValue('bank_address', response.data.ADDRESS)
                    setValue('branch_name', response.data.BRANCH)
                }
            ).catch((error)=>{
                alert('Please enter valid IFSC code')
            })
        }
    }

    function SaveData(data){
        axios.post('http://127.0.0.1:8000/v1/bankdetails/',data).then(
            (result)=>{
                console.log("result")
                alert("Successfully Saved!")
                nav('/show_Details')
                reset()
            }
        ).catch((errors)=>{
            console.log(errors);
        })
    }

    function fetchAllUsers(){
        axios.get('http://localhost:8000/v1/create/').then(
            (response)=>{
                setUsers(response.data)
            }
        ).catch(
            (error)=>{
                console.error(error)
            })
    }

    useEffect(
        ()=>{
            fetchAllUsers()
        }, []
    )

  return (
    <div>
        <form onSubmit={handleSubmit(SaveData)}  className="row g-3 w-50 bg-dark text-white p-3 mx-auto">
  <div className="col-md-6">
    <label for="bank_name" className="form-label">Bank_Name</label>
    <input type="text" className="form-control" id="bank_name"{...register('bank_name')} />
  </div>
  <div className="col-md-6">
    <label for="bank_ifsc_code" className="form-label">Bank_ifsc_code</label>
    <input type="text" className="form-control" id="bank_ifsc_code" {...register('bank_ifsc_code',{
        required:{
            value: true,
            message: "This field is required"
        },
        pattern:{
            value: /^[A-Z]{4}[0-9]{7}$/,
            message: "Enter a Valid ifsc Code"
        }
    })} onChange={getBankDetails}/>
    <p className='text-danger fw-bold'>{errors.bank_ifsc_code?.message}</p>
  </div>
  <div className="col-12">
    <label for="bank_address" className="form-label">Bank_Address</label>
    <input type="text" className="form-control" id="bank_address" placeholder="1234 Main St"{...register('bank_address')}/>
  </div>
  <div className="col-12">
    <label for="bank_account_number" className="form-label">Account_Number</label>
    <input type="text" className="form-control" id="bank_account_number"{...register('bank_account_number')}/>
  </div>
  <div className="col-md-6">
    <label for="branch_name" className="form-label">Branch_name</label>
    <input type="text" className="form-control" id="branch_name"{...register('branch_name')}/>
  </div>
  <div className='col-md-6'>
    <label className='form-label'>User</label>
    <select className='form-select' {...register('user')}>
        <option selected>SELECT USER</option>
        {
            users.map(
                (u)=>{
                    return(
                        <option value={u.id}>{u.username}</option>
                    )
                }
            )
        }
    </select>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-warning col-5">Add Details</button>
  </div>
</form>
    </div>
  )
}

export default Add_Bank_Details