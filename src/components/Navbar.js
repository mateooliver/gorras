import React from "react";
import logoPNG from './img/logoPNG.png'

let logoTamano={
    height:10
}
const Navbar= ()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
            <div class="container-fluid">
                <img style={{height:100, backgroundColor:"white" }} className="rounded-circle" src={logoPNG} alt="logo" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active text-white border border-light rounded-3 m-3 " aria-current="page" href="#">Inicio</a>
                    </li>
                
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white border border-light rounded-3 m-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Gorras Hombre</a></li>
                        <li><a class="dropdown-item" href="#">Gorras Mujer</a></li>
                    
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar en la pagina" aria-label="Search"></input>
                    <button class="btn btn-outline-light" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
// rafc es para crear funciones con la nueva extension