import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComp from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <NavbarComp/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default App