import React from 'react'
import './Footer.css'

function HomeFooter() {
  return (
    <div className="container col div">
      
  <footer className="py-3 my-4">
  <ul className="nav float-end ms-auto">
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-twitter-x col tw"></i></a></li></h1>
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-instagram col in"></i></a></li></h1>
      <h1><li className="ms-3"><a className="text-dark" href="#"><i className="bi bi-facebook col fb"></i></a></li></h1>
    </ul>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    
      <h5><li className="nav-item"><a href="#" className="nav-link px-3 text-black fw-bold">Home</a></li></h5>
      <h5><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">Features</a></li></h5>
      <h5><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">Pricing</a></li></h5>
      <h5><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">FAQs</a></li></h5>
      <h5><li className="nav-item"><a href="#" className="nav-link px-2 text-black fw-bold">About</a></li></h5>
    </ul>
    
    <p className="text-center text-black fw-bold">&copy; 2024 Company, Inc</p>
  </footer>
</div>

  )
}

export default HomeFooter