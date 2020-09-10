import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';

import LinkForm from './LinkForm';


const Links = () => {
    
    const [ofertas, setOfertas] = useState([]);
    const [idUsando, setidUsando] = useState('');

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
            <div> 
                <LinkForm {...{addOrEditLink, idUsando, ofertas}}/>

            <hr/>

            <h1>Ofertas</h1>
            { ofertas.map( oferta => {
                
                return  <div key={oferta.id}>
                            <h1>{oferta.cor}</h1>
                            <h2>{oferta.marca}</h2>
                            <h2>{oferta.modelo}</h2>
                            <img src={oferta.fotos} alt=""/>
                            <button onClick={() => deletaOferta(oferta.id)}>delete</button>
                            <button onClick={() => setidUsando(oferta.id)}>edit</button> 
                        </div>

            })}
            </div>
        );
};

export default Links;