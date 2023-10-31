import React from 'react';
import { Link } from 'react-router-dom';
import './Contenido.css'

const Gasto = () => {
    return (
        <main className="fondo-gastos">
            <div className='container d-flex justify-content-end' >
                <div >
                    <Link to='/' className='btn btn-dark'>Volver</Link>
                </div>
            </div>
        </main>
    );
};

export default Gasto;