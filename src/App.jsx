import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import Content from './pages/Contenido';
import Footer from './components/Footer';
import HomeComponent from './pages/Contenido';
import GastoComponent from './pages/Gasto';
import IngresoComponent from './pages/Ingreso'
import icono from './assets/icono.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container col-12 dimension">
        <div className="row">
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
                  <Link className="nav-link" to="/">Home</Link>
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

          <div className="row mt-3">
            <div className='col-3'>
              <Aside />
            </div>
            <div className="col-9">
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/ingreso" element={<IngresoComponent />} />
                <Route path="/gasto" element={<GastoComponent />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="mt-0">
          <Footer />
        </div>

      </div>


    </Router>
  )
}

export default App
