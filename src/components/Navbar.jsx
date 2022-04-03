import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cartwidget from "./Cartwidget";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Navbar= (props)=>{
  
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
            <div className="container-fluid">
                
                <Link to={"/"}><img style={{height:100, backgroundColor:"white" }} className="rounded-circle" src={props.logo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <Link to="/category/oscuras" className="nav-link active text-white border border-light rounded-3 m-3 " aria-current="page" href="#">Gorras Oscuras</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/intermedia" className="nav-link active text-white border border-light rounded-3 m-3 " aria-current="page" href="#">Gorras Intermedias</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/claras" className="nav-link active text-white border border-light rounded-3 m-3 " aria-current="page" href="#">Gorras Claras</Link>
                    </li>
               </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar en la pagina" aria-label="Search" id="searchBox"></input>
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