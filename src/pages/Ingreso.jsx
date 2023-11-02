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
            <div className='titulo-ingreso'>
                INGRESO
            </div>
            <div className='formulario'>
                <form>
                    <div class="form-group col-md-4 ">
                        <label for="inputState">Categoría: </label>
                        <select id="inputState" class="form-control">
                            <option selected>Sueldo</option>
                            <option>Inversion</option>
                            <option>Plazo Fijo</option>
                            <option>Adicionales</option>
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

                    <div class="form-group col-md-4 mt-4">
                        <input type="text" class="form-control mt-1" id="formGroupExampleInput2" placeholder="descripcion..." />
                    </div>
                    <div className="form-group col-md-4 mt-4">
                        <input type="date" className="form-control mt-1" id="formGroupExampleInput2" placeholder="descripcion..." />
                    </div>
                    <div class="form-group col-md-4 mt-4">
                        <textarea class="form-control mt-1" id="exampleFormControlTextarea1" rows="3" placeholder="observaciones..."></textarea>
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

export default Ingreso;