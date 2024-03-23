
import './App.css';


import Home from './components/Home';
import HomeFooter from './components/HomeFooter';
import Login from './components/Login'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import VerifiedUnverifiedProducts from './components/VerifiedUnverifiedProducts';

function App() {
  return (
  
    
    <BrowserRouter>
    
            <Routes>
          <Route path="" element={<Home/>} />
          <Route path='/AdminDashboard' element={<AdminDashboard/>}>
            <Route path ="VerifiedUnverifiedProducts" element={<VerifiedUnverifiedProducts/>}/>
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path='/UserDashboard' element={<UserDashboard/>}/>

        </Routes>
        
          <Outlet/>
          
          
          <HomeFooter/>
    </BrowserRouter>

  );
}

export default App;
