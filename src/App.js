import './App.css';
import Home from './components/Home';
import HomeFooter from './components/HomeFooter';
import { Routes,Route,Outlet } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import FeedbackForm from './components/FeedbackApp/FeedbackForm';
import FeedbackList from './components/FeedbackApp/FeedbackList';
import AuctionList from './components/AuctionApp/CurrentDateAuctions';
import AuctionBids from './components/AuctionApp/AuctionBids';



function App() {
  return (
      <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/form' element={<FeedbackForm/>}/>
            <Route path='/list' element={<FeedbackList/>}/>
            <Route path='/AuctionList' element={<AuctionList/>}/>
            <Route path='/AuctionBids/:auctionId' element={<AuctionBids/>}/>
        </Routes>
        <Outlet/>
        <HomeFooter />
        </BrowserRouter>
      
   
  );
}

export default App;
