import React, { useState , useEffect } from 'react';
import './styles.css';

import { db } from '../../services/firebase';

import { Card } from 'antd';

import ModalEditOfertt from '../ModalEditOfertt';

const CardOferta = () => {
  const [idUsando, setidUsando] = useState('');
  const [ofertas, setOfertas] = useState([]);

  const addOrEditLink = async (linkObject) => {
         
    if (idUsando === '') {
        await db.collection('ofertas').doc().set(linkObject);
    } else {
       await db.collection('ofertas').doc(idUsando).update(linkObject)
    }

    setidUsando('');    
  }
  
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

    const deletaOferta = async (id) => {
      if( window.confirm('Você quer realmente excluir?') ){
          await db.collection('ofertas').doc(id).delete();
          console.log('Oferta deletada')
      }
      
    }

  return (
    <>
      <div className="WrapperAdmin">

            { ofertas.map( oferta => {
              return(
                <div className="ContentAdmin">
                  <Card key={oferta.id}
                  className="CardAdmin" 
                  hoverable
                  
                  >
                    <img alt="example" src={oferta.fotos} />

                    <p>{oferta.preco}</p>
                    <p>{oferta.ano}</p>
                    <p>{oferta.marca}</p>
                    <p>{oferta.modelo}</p>
                    <p>{oferta.visualizacao}</p>

                    
                      <button onClick={() => deletaOferta(oferta.id)}>Excluir Oferta</button>
                      <ModalEditOfertt {...{addOrEditLink, idUsando, ofertas}} onClick={() => setidUsando(oferta.id)} />
                   
                  </Card>

                </div>
                  );  
            })}
            
      </div>
    </>
    )
}
  
export default CardOferta;