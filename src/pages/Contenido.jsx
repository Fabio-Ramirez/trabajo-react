import React from 'react';
import { Link } from 'react-router-dom';
import './Contenido.css'

const Contenido = () => {
    return (
        <main className="fondo-principal">
            <div className="container">
                <h2>Bienvenido!</h2>
                <p>Esta app le ayudara y guiara a una </p>
                <p>mejor gestion sobre sus</p>
                <p> Finanzas Personales.</p>
                <p>Comenzemos...</p>
            </div>

            <div className='container d-flex justify-content-end' style={{ marginTop: '4rem' }}>
                <div className="row ">
                    <div className='col-6'>
                        <Link to='/ingreso' className='btn btn-secondary'>Ingresos</Link>
                    </div>
                    <div className='col-5'>
                        <Link to='/gasto' className='btn btn-secondary'>Gastos</Link>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Contenido;
