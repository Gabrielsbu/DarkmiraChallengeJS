import React, { useState , useEffect } from 'react';

import './styles.css'

import { db } from '../../services/firebase';

import { Card } from 'antd';

const CardOferta = () => {
  const [ofertas, setOfertas] = useState([]);

  const getOfertas = async () => {
    
    await db.collection('ofertas')
     .onSnapshot((querySnapshot) => {
             const docs = [];
             querySnapshot.forEach((doc) => {
                 docs.push({...doc.data(), id:doc.id});
         });

         setOfertas(docs);
     });
    };

    useEffect(() => {
        getOfertas();
    }, [])

  return (
    <>
      <div className="ContainerCard">

        
            { ofertas.map( oferta => {
              return(
                  <Card key={oferta.id}
                  className="Card" 
                  hoverable
                  
                  >
                    <img alt="example" src={oferta.fotos} />

                    <p>{oferta.preco}</p>
                    <p>{oferta.ano}</p>
                    <p>{oferta.marca}</p>
                    <p>{oferta.modelo}</p>
                    <p>{oferta.visualizacao}</p>
              
                  {/* <ModalOfertas /> */}
                  </Card>
                  
                  );  
            })}
            
      </div>
    </>
    )
}
  
export default CardOferta;