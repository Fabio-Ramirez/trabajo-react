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
            <div className='titulo-gasto'>
                GASTO
            </div>
            <div className='formulario-gasto'>
                <form>
                    <div class="form-group col-md-4 input-gasto ">
                        <label for="inputState">Categoría: </label>
                        <select id="inputState" class="form-control">
                            <option selected></option>
                            <option>Comida</option>
                            <option>Prestamos</option>
                            <option>Indumentaria</option>
                            <option>Gustos</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 mt-3">
                        <label for="formGroupExampleInput2">Monto:</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">$</div>
                            </div>
                            <input type="text" class="form-control col-4" id="inlineFormInputGroupUsername2" placeholder="0.00" />
                        </div>
                    </div>
                    <div class="form-group col-md-4 mt-3">
                        <label for="formGroupExampleInput">Descripcion:</label>
                        <input type="text" class="form-control input-gasto mt-1" id="formGroupExampleInput" />
                    </div>
                    <div className="form-group col-md-4 mt-3">
                        <label htmlFor="formGroupExampleInput2">Fecha:</label>
                        <input type="date" className="form-control input-gasto mt-1" id="formGroupExampleInput2" />
                    </div>
                    <div class="form-group col-md-4 mt-3">
                        <label for="exampleFormControlTextarea1">Observacion: </label>
                        <textarea class="form-control mt-1" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group col-md-12 mt-3">
                        <div className="form-group">
                            <h4 className='custom-h4'>Comprobante:</h4>
                        </div>
                        <input type="file" class="form-control" id="inputGroupFile02" />
                    </div>
                </form>
            </div>
            <div className='container d-flex justify-content-end mt-3' >
                <div >
                    <Link to='/' className='btn btn-primary'>Guardar</Link>
                </div>
            </div>
        </main>
    );
};

export default Gasto;