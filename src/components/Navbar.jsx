import React from 'react';
import icono from '../assets/icono.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <img src={icono} width="100" height="60" class="d-inline-block align-top" alt="" />
            <a class="navbar-brand mr-1" href="#">
                Finanza
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/ingreso">Ingreso</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link className="nav-link" to="/gasto">Gasto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
