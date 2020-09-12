import React, { useState , useEffect } from 'react';
import { db } from '../../services/firebase';

import './styles.css';

import { Card } from 'antd';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { Link } from 'react-router-dom';

const Ofertas = () => {
  
  const [ofertas, setOfertas] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('ofertas').get()
      setOfertas(data.docs.map(doc => (
        {...doc.data(), id: doc.id}
      )))
    }
    
    fetchData();
  }, [])


  return (
      <>
          
      <Header />

     
        <div className="ContainerBanner">
          <h2>Ofertas com até 70 % de desconto</h2>
          
        </div>


        <div className="ContentOfertts">

          { ofertas.map( oferta => {
                return(
                  <div className="ContentOferta" key={oferta.id}>
                    <Card 
                    className="CardOferta" 
                    hoverable
                    
                    >
                      <img alt="example" src={oferta.fotos} />

                      <p>{oferta.preco}</p>
                      <p>{oferta.ano}</p>
                      <p>{oferta.marca}</p>
                      <p>{oferta.modelo}</p>
                      <p>{oferta.visualizacao}</p>
                    </Card>
                </div>
                );  
          })}
                      


      </div>
      <div className="Link">
        <Link to="/view" >Toque para ver mais detalhes</Link>
      </div>
      <Footer />
      
      </>
  );
}

export default Ofertas;