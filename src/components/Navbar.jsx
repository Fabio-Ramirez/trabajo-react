import React from 'react';
import icono from '../assets/icono.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <img src={icono} width="100" height="60" class="d-inline-block align-top" alt="" />
            <a class="navbar-brand" href="#">
                Finanza
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Inicio </a>
                    <a class="nav-item nav-link" href="#">Ingresos</a>
                    <a class="nav-item nav-link" href="#">Gastos</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
