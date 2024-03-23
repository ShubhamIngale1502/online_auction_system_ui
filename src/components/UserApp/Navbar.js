import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-warning text-dark mb-5 ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/register">RegisterUser</NavLink>
        <NavLink className="nav-link" to="/show">ShowUser</NavLink>
        <NavLink className="nav-link" to="#">Pricing</NavLink>
        <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar