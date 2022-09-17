import React from 'react'

export default function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <h2><a class="navbar-brand" href="/">Chris Nohilly</a></h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link">About Me</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
