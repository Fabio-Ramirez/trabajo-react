import React from 'react';
import './aside.css'

const Aside = () => {
    return (
        <aside className="col-md-12 fondo-aside">
            <h2>Información Financiera</h2>
            <ul>
                <li>Balance: $100,000</li>
                <li>Ingresos mensuales: $30,000</li>
                <li>Gastos mensuales: $20,000</li>
                <li>Ahorros: $5,000</li>
                <li>Creditos: $1,000</li>
                <li>Inversion: $2,000</li>
                <li>Deuda: $5,000</li>
                <li>Inmuebles: $10,000</li>
                <li>Diezmo: $10,000</li>
            </ul>
        </aside>
    );
};

export default Aside;
