import React from 'react';
import './aside.css'

const Aside = () => {
    return (
        <aside className="col-md-12 fondo-aside">
            <h2>Información Financiera</h2>
            <ul>
                <li>Balance: $10,000</li>
                <li>Ingresos mensuales: $3,000</li>
                <li>Gastos mensuales: $2,000</li>
                <li>Ahorros: $5,000</li>
                <li>Creditos: $1,000</li>
                <li>Inversion: $2,000</li>
            </ul>
        </aside>
    );
};

export default Aside;
