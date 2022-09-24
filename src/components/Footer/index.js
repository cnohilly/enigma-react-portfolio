import React from 'react';

function Footer() {
    return (
        <footer className="py-3 border-top border-secondary">
            <ul className="nav justify-content-center align-items-center">
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chris-nohilly-291661215/">
                        <i className="bi bi-linkedin footer-icon"></i>
                        <span className='ms-2'>Chris Nohilly</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        target="_blank" rel="noopener noreferrer" href="https://github.com/cnohilly">
                        <i className="bi bi-github footer-icon"></i>
                        <span className='ms-2'>cnohilly</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;