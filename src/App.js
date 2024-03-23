
import './App.css';
import Home from './components/Home';
import HomeFooter from './components/HomeFooter';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Auction from './components/seller_app/Auction';
import AuctionDetails from './components/seller_app/AuctionDetails';
import Week_Auctions from './components/seller_app/Week_Auction';

function App() {
  return (
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/auction' element={<Auction/>}></Route>
      <Route path='/auctiondetails' element={<AuctionDetails/>}></Route>
      <Route path='/week' element={<Week_Auctions/>}></Route>
    </Routes>
    <Outlet/>
    <HomeFooter/>
    </BrowserRouter>
  );
}

export default App;
