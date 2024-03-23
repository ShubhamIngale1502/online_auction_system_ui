import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import HomeFooter from './components/HomeFooter';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import RegisterUser from './components/UserApp/RegisterUser';
import ShowUser from  './components/UserApp/ShowUser';
import Navbar from './components/UserApp/Navbar';
import Add_Bank_Details from './components/UserApp/Add_Bank_Details';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path='' element={ <Home/>} />
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/show' element = {<ShowUser/>}/>
          <Route  path="/show_Details" element={<Add_Bank_Details/>}/>
      </Routes>
      <Outlet/>
      <HomeFooter/>
      </BrowserRouter>
  );
}

export default App;
