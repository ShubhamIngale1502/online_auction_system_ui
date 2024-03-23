import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function RegisterUser() {

  const { register, handleSubmit, reset } = useForm()
  const nav = useNavigate()

  function registerUserData(data){
    data.aadhar_card = data.aadhar_card[0]
    console.log(data)
    data.pan_card = data.pan_card[0]
    console.log(data)
    axios.post('http://127.0.0.1:8000/v1/create/',data,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    }).then(
        (result)=>{
            console.log(result);
            reset()
            alert("Data Submited")
            nav('/show')
        }
    ).catch((error)=>{
        console.log(error);
    })
}

  return (
    <div>
        <form onSubmit={handleSubmit(registerUserData)}  className="row w-50 mx-auto bg-dark text-warning text-center g-3">
  <div className="col-md-6">
    <label for="first_name" className="form-label">First_Name</label>
    <input type="text" className="form-control" id="first_name"{...register('first_name')}/>
  </div>
  <div className="col-md-6">
    <label for="last_name" className="form-label">Last_name</label>
    <input type="text" className="form-control" id="last_name"{...register('last_name')}/>
  </div>
  <div className="col-md-6">
    <label for="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username"{...register('username',{maxLength: 20,minLength:8})}/>
  </div>
  <div className="col-md-6">
    <label for="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password"{...register('password',{ pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$.*_!@])[a-zA-Z0-9#$.*_!@]{8,20}$' })}/>
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"{...register('email')}/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"{...register('address')} />
  </div>
  <div className="col-12">
    <label for="contact_no" className="form-label">Contact_Number</label>
    <input type="text" className="form-control" id="contact_no"{...register('contact_no')} />
  </div>
  <div className="col-md-4">
    <label htmlFor="aadhar_card" className="form-label">Aadhar_Card</label>
    <input type="file" className="form-control" id="aadhar_card"{...register('aadhar_card')}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="pan_card" className="form-label">Pan_Card</label>
    <input type="file" className="form-control" id="pan_card"{...register('pan_card')}/>
  </div>
  
  {/* <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  <div className="col-md-2">
    <label for="pincode" className="form-label">PinCode</label>
    <input type="text" className="form-control" id="pincode"{...register('pincode')}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-warning col-6 mb-3">Register User</button>
  </div>
</form>
    </div>
  )
}

export default RegisterUser