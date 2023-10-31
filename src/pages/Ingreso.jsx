import React from 'react';
import { Link } from 'react-router-dom';
import './Contenido.css'

const Ingreso = () => {
    return (
        <main className="fondo-ingreso">
            <div className='container d-flex justify-content-end' >
                <div >
                    <Link to='/' className='btn btn-light'>Volver</Link>
                </div>
            </div>
        </main>
    );
};

export default Ingreso;