import React, { useState , useEffect } from 'react';
import './styles.css';
import { message } from 'antd';
import { db } from '../../services/firebase';

import { Card } from 'antd';
import ModalEditOfertt from '../ModalEditOfertt';

const CardOferta = () => {
  const [idUsando, setidUsando] = useState('');
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

    const deletaOferta = async (id) => {
      if ( window.confirm('Você quer realmente excluir?')) 
      {
          await db.collection('ofertas').doc(id).delete();

          message.success({
            content: 'Oferta deletada com sucesso',
            style:{
                width: '100vw',
                fontSize: '28px'
                
            },
          }, 10);
      }
      
    }
 
    const addOrEditLink = async (linkObject) => {
      try {
          if (idUsando === '') {

           try{
             await db.collection('ofertas').doc().set(linkObject);
            }
             catch (error) {
              message.success({
                content: 'Ocorreu um erro na criação',
                style:{
                    width: '100%',
                    fontSize: '28px'
                    
                },
              }, 10);
             }
           
           
          } else {
            await db.collection('ofertas').doc(idUsando).update(linkObject)
            
          }

          setidUsando('');
      } catch (error) {
          console.log("erro", error)
      }
      
    }

  return (
    <>
      <div className="WrapperAdmin">

            { ofertas.map( oferta => {
              return(
                <div className="ContentAdmin" key={oferta.id}>
                  <Card 
                  className="CardAdmin" 
                  hoverable
                  
                  >
                    <img alt="example" src={oferta.fotos} />

                    <p>{oferta.preco}</p>
                    <p>{oferta.ano}</p>
                    <p>{oferta.marca}</p>
                    <p>{oferta.modelo}</p>
                    <p>{oferta.visualizacao}</p>

                    <div className="ButtonsAdmin">
                      <button onClick={() => setidUsando(oferta.id)}>Selecionar Edição</button>
                      <ModalEditOfertt {...{addOrEditLink, idUsando, ofertas}}/>
                      <button onClick={() => deletaOferta(oferta.id)}>Excluir Oferta</button>
                    </div>

                  </Card>

                </div>
                  );  
            })}
            
      </div>
    </>
    )
}
  
export default CardOferta;