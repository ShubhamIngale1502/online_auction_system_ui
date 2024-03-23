import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ShowUser() {

  const [user, setUser] = useState([])

  function getData(){
    axios.get('http://127.0.0.1:8000/v1/create/').then(
      (result)=>{
        setUser(result.data)
        console.log(result.data)
      }
    ).catch((errors)=>{
      console.log(errors);
    })
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <table className='table table-success table-striped'>
          <thead>
            <tr>
              <th>First_Name</th>
              <th>Last_Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>Contact_Number</th>
              <th>Address</th>
              <th>Aadhar_Card</th>
              <th>Pan_Card</th>
              <th>PinCode</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((mp)=>{
                return(
                    <tr>
                        <td>{mp.first_name}</td>
                        <td>{mp.last_name}</td>
                        <td>{mp.username}</td>
                        <td>{mp.password}</td>
                        <td>{mp.email}</td>
                        <td>{mp.contact_no}</td>
                        <td>{mp.address}</td>
                        <td><img src={`http://localhost:8000${mp.aadhar_card}`}height='100px'/></td>
                        <td><img src={`http://localhost:8000${mp.pan_card}`}height='100px'/></td>
                        <td>{mp.pincode}</td>
                    </tr>
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default ShowUser