import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase';

import './styles.css';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ModalCreateOfertt from '../../Components/ModalCreateOfertt';

import { Card } from 'antd';

const Administracao = () => {


    const [idUsando, setidUsando] = useState('');
    const [ofertas, setOfertas] = useState([]);

    const deletaOferta = async (id) => {
        if( window.confirm('Você quer realmente excluir?') ){
            await db.collection('ofertas').doc(id).delete();
            console.log('Oferta deletada')
        }
        
    }

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

    return (
      <>
      
      <Header />

        <div className="BannerAdmin">
          <h2>Bem vindo a central administrativa </h2>

          <ModalCreateOfertt {...{addOrEditLink, idUsando}}/>
        </div>

          
                <div className="Wrapper">
                { ofertas.map( oferta => {
                    return (
                            <div className="ContentOfertas">
                                <Card key={oferta.id}
                                className="Card" 
                                title="Todas as oferta"
                                hoverable

                                >

                                <img alt="example" src={oferta.fotos} />
                                <div>

                                </div>
                                <p>Preço  {oferta.preco}</p>
                                <p>Ano  {oferta.ano}</p>
                                <p>Marca  {oferta.marca}</p>
                                <p>Modelo  {oferta.modelo}</p>
                                <p>{oferta.visualizacao}</p>

                                <div className="Buttons">
                                    <button onClick={() => deletaOferta(oferta.id)}> Excluir</button>
                                    <button onClick={() => setidUsando(oferta.id)}>edit</button> 
                                </div>
                    
                                </Card>
                                {/* <ModalOfertas /> */}
                        </div>
                        
                        
                        );  
                    })}

                </div>
            
    
      
 
      <Footer />

      </>
  );
}

export default Administracao;