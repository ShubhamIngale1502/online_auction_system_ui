import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/bidcar.jpg'
import './Footer.css'

function Home() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg bg-dark text-white" >
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-white" href="#">E-Auction.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <NavLink className="nav-link active text-warning" aria-current="page" href="#">Home</NavLink>
       <NavLink className="nav-link active text-warning" href="#">Features</NavLink>
       <NavLink className="nav-link active text-warning" href="#">Pricing</NavLink>
      </div>
      <div className='container ms-auto'>
        <form className='d-flex'>
            <input className='form-control ms-auto w-25' type='search' placeholder='Search' aria-label='Search'/>
            <button className='btn btn-outline-warning' type='submit'>Search</button>
        </form>
    </div>
    <div className='ms-auto fw-bold'>
      <NavLink className="nav-link active" href="#">Login</NavLink>
      </div>
    </div>
  </div>
</nav>
<img src={require('../Assets/auction.image.jpg')} alt="" style={{width:'100%', height:450}}/>
<p className='text-black col div'>
<h5>Online auction platforms have made significant efforts to prevent fraud and protect their users. </h5>
<h5>Once fraudulent behavior is identified, the platform can freeze the account of the relevant seller.</h5>
<h5>But this can only passively punish accounts of people who have committed fraudulent behavior. </h5>
<h5>Based on the characteristics of the internet, these people only need to register new accounts.</h5>
</p>
<br></br>
<div className='row mb-1'>
    <div className='col-md-6'>
      <img  src={require("../Assets/sign.jpg")} alt="" style={{height:250}} />
    </div>
    <div className='col-md-6'>
      <h5 className= ''>In this project user have to register first to Enter into the Auction, then after regisration User can bid on perticular product.
    User can start his bidding from base price. 
    You can collect information regarding the name, email, phone number, address of people and a detailed description of the items such as its name and estimated value.
    Also, your customers can upload a photo by using this auction registration form template.</h5>
    </div>
</div>
<br></br>
<div className='row mb-1'>
    <div className='col-md-6'>
      <h5 className=''>
      There are many variations of passages of Lorem Ipsum available, 
      but the majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable. 
      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
      </h5>
    </div>
    <div className='col-md-6'>
    <img  src={require("../Assets/product.webp")} alt="" style={{height:250}} />
    </div>
</div>
<div className='row mb-1'>
    <div className='col-md-6'>
      <img  src={require("../Assets/bidding.jpg")} alt="" style={{height:250}} />
    </div>
    
      <p className='d-flex p-2 text-center fw-bold col-md-6'>In this project user have to register first to Enter into the Auction, then after regisration User can bid on perticular product.
    User can start his bidding from base price. 
    You can collect information regarding the name, email, phone number, address of people and a detailed description of the items such as its name and estimated value.
    Also, your customers can upload a photo by using this auction registration form template.</p>
    
</div>
    </div>
  
  )
}

export default Home