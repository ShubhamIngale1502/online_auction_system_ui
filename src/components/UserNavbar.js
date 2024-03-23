import { NavLink } from "react-router-dom"

const UserNavbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="#">AuctionWEB.com</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-warning" aria-current="page" to="/home">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-warning" aria-current="page" to="gallery">GALLERY</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-warning" aria-current="page" to="register">REGISTER</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-warning" aria-current="page" to="show">SHOW</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}

export default UserNavbar