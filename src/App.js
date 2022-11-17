import React from 'react'
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer/footer";
import { Carrito } from "./componentes/Carrito";
import { DataProvider } from './context/DataProvider';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./componentes/page.js";
import "boxicons";

function App()
{
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <div className="inicio">
            <img src="/images/inicio3.jpg" alt="" className='imgInicio' />

            <Carrito />
            <Pages />

            <Footer />

          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;