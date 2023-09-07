import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navegacion">
                <div className="container-fluid contenedor">
                    <a className="navbar-brand marca" href="#">PANETTONE</a>
                    <button className="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse botones" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#productos">Precios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar