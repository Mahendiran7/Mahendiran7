import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-warning">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <Link to={"/dashboard"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          </Link>
          <Link to={"/pricing"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          </Link>
          <Link to={"/slide"}>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Slide</a>
          </li>
          </Link>
          <Link to={"/hooks"}>
            <li className="nav-item">
              <a class="nav-link" href="#">Hooks</a>
            </li>
          </Link>
          <Link to={"/profile"}>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Topbar