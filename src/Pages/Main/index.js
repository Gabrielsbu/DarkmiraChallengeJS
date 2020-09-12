import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import CarroBody from '../../assets/carrobody.jpg';

const Main = () => {

    return (
      <>
        <Header/>

       <div className="containerBody">
        
           
        <div className="contentTop">
              
                <div className="textBody">
                    <h2> Encontrar o carro dos seus sonhos nunca foi tão fácil </h2>
                    <p> O melhor atacado de toda a região, venha conhecer nossas ofertas, qualidade e melhor preço você encontra aqui na Best Motors </p>
                    <img src={CarroBody} alt="img-top-menu"/>
                    <Link to="/offers">
                          Melhores ofertas
                    </Link>
                  </div>

                  <div className="imgTopMenu">
                    <img src={CarroBody} alt="img-top-menu"/>
                  </div>
                  
            </div>
            
     
            <div className="contentMid">
              <div className="bodyText">
                <h2>Saiba mais sobre a BEST MOTORS</h2>
                <span> Destinamos a entregar o melhor produto que você merece e pode ter, o carro é o seu melhor amigo, sem ele nada funcionaria no mercado, aqui na Best Motors, valorizamos nossos clientes e os nossos carros, vamos nos conhecer !
                </span>

                <h3>Aceitamos todos os tipos de pagamento</h3>
                <span>  Aceitamos dinheiro, Cartão de crédito, Financiamento, você escolhe também deixar seu carro como entrada e parcelar em até 48x sem juros.
                </span>

              </div>
            </div>

          </div>

        <Footer/>
      </>
  );
}

export default Main;