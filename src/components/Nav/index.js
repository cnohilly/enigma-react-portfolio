import React from 'react'

export default function Nav({ currentPage, handlePageChange }) {

  function toggleNavBar() {
    const toggle = document.getElementById('page-navbar-toggler');
    if (toggle.getAttribute('aria-expanded') === 'true') {
      toggle.click();
    }
  }

  return (
    <header className='sticky-top'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
        <div className="container-fluid">
          <h2 ><a className="navbar-brand text-light fs-3" id='name-title'
            href="#about" onClick={() => handlePageChange('About')}>Chris Nohilly</a></h2>
          <button id='page-navbar-toggler' className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#page-navbar" aria-controls="page-navbar" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="page-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#about"
                  onClick={() => { handlePageChange('About'); toggleNavBar(); }}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio"
                  onClick={() => { handlePageChange('Portfolio'); toggleNavBar(); }}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact"
                  onClick={() => { handlePageChange('Contact'); toggleNavBar(); }}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume"
                  onClick={() => { handlePageChange('Resume'); toggleNavBar(); }}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
