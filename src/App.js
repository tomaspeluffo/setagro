import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Social from './components/Social'
import Modulos from './components/Modulos'
import Caracteristicas from './components/Caracteristicas'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'


function App() {

  return (
      <div className="contenedor"> 
        <Header />
        <Home />
        <Social />

        <div className="mainContainer">
        <Modulos />
        <Caracteristicas />

        </div>
        <div className="slider" id="galeria"> 
        <Galeria />
        </div>

        <div className=".contactoContainer" id="contacto">
        <Contacto>
          
        </Contacto>
        </div>


        <Footer />
      </div>

      

  );
}

export default App;
