import React from "react";

import Cartwidget from "./Cartwidget";

const Navbar= (props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
            <div className="container-fluid">
                
                <img style={{height:100, backgroundColor:"white" }} className="rounded-circle" src={props.logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white border border-light rounded-3 m-3 " aria-current="page" href="#">Inicio</a>
                    </li>
                
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white border border-light rounded-3 m-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Gorras Hombre</a></li>
                        <li><a className="dropdown-item" href="#">Gorras Mujer</a></li>
                    
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar en la pagina" aria-label="Search"></input>
                    <button className="btn btn-outline-light" type="submit">Buscar</button>
                </form>
                <Cartwidget />
                </div>
            </div>
        </nav>
    )
}
export default Navbar
// rafc es para crear funciones con la nueva extension