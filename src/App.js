import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import HomeFooter from './components/HomeFooter';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ProductComponent from './components/Productss/ProductComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductCo from './components/Productss/ProductCo';
import ProductForm from './components/Productss/ProductForm';
import ProductLink from './components/Productss/ProductLink';
import BidderForm from './components/Bidder/BidderForm';
import CurrentAuction from './components/CurrentAuction/CurrentAuction';


function App() {
  return (
    <BrowserRouter>
        <Home/>
        <Routes>
              <Route path='/product' element={<ProductComponent/>}/>
              <Route path='/pro' element={<ProductCo/>}/>
              <Route path='/form' element={<ProductForm/>}/>
              <Route path='/product/:id' element={<ProductLink/>}/>
              <Route path='/bidder' element={<BidderForm/>}/>
              <Route path='/current' element={<CurrentAuction/>}/>
        </Routes>
        <Outlet/>
        <HomeFooter/>
    </BrowserRouter>
  );
}

export default App;
