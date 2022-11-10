import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">Daily News</Link>
             <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
        </li>
         {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
    </div>
    <div>
    <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Action</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
