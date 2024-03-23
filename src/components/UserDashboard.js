
import UserNavbar from './UserNavbar'
import { Outlet } from 'react-router-dom'



function UserDashboard() {
 
  

  return (
    <>
   
    <UserNavbar/>
    <div>UserDashboard</div>
    
    <Outlet/>
    </>
    
  )
  }


export default UserDashboard