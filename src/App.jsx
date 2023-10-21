import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Content from './pages/Contenido';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="container">
      <div className="row">
        <Navbar />
        <div className="row mt-3">
          <div className='col-3'>
            <Aside />
          </div>
          <Content />
        </div>
      </div>
      <div className="mt-0">
        <Footer />
      </div>

    </div>

  )
}

export default App
