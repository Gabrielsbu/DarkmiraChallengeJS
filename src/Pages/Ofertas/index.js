import React from 'react';

import './styles.css'

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CardOferta from '../../Components/CardOferta';



const Ofertas = () => {

    return (
      <>
          
      <Header />
          <div className="ContainerCard">

            <div className="Banner">
              <h2>Ofertas com até 70 % de desconto</h2>
            </div>
            
            <div className="ContentCard">
                <CardOferta />
                
            </div>

          </div>
          

          <Footer />
      </>
  );
}

export default Ofertas;