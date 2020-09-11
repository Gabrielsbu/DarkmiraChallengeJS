import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'antd';

import { db } from '../../services/firebase';
import { Card } from 'antd';

import './styles.css';

const ModalOfertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [visible, setVisible] = useState(false);

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
      <Button type="primary" shape="round" onClick={() => setVisible(true)}>
        Ver detalhadamente
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        { ofertas.map( oferta => {
              return(
                <div className="ContentOfertas">
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
                  </Card>

                </div>
                  );  
            })}
            
      </Modal>
    </>
  );
}

export default ModalOfertas;