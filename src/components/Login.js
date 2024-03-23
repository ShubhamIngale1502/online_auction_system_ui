import React from 'react'
import {useForm}  from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'


const Login = () => {

  const {register,handleSubmit, reset} = useForm()
  const nav = useNavigate()

  function saveData(data){
    axios.post('http://127.0.0.1:8000/v1/access/',data).then(
      (result)=>{
        console.log(result);
        sessionStorage.setItem('access',result.data.access)
        sessionStorage.setItem('refresh',result.data.refresh)
        sessionStorage.setItem('role', result.data.role)
        if(result.data.role === 'admin'){
          nav('/AdminDashboard')
        }else{
          nav('/UserDashboard')

        }
        reset()
      }
    ).catch((errors)=>{
      console.log(errors);
      alert('Username or password invalid')
    })
  }
    return(
       <div>
            <form onSubmit={handleSubmit(saveData)} className="row g-3 bg-dark text-warning w-50 mx-auto p-3">
  <div className="col-md-6">
    <label for="username" className="form-label">UserName</label>
    <input type="text" className="form-control" id="username"{...register('username')}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"{...register('password',{ pattern: '^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[#$._!@])[a-zA-Z0-9#$._!@]{8,20}$' })}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-info clo-6">Login</button>
  </div>
</form>
       </div>
    )
}
export default Login