import React, { useState , useEffect } from 'react';
import { db } from '../../services/firebase';

import './styles.css'
import { Card, Modal, Button } from 'antd';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [visible, setVisible] = useState(false);

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

      <div className="ContainerCard">

        <div className="Banner">
          <h2>Ofertas com até 70 % de desconto</h2>
        </div>
            
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
              
                    <Button type="primary" shape="round" onClick={() => setVisible(true) }>
                        Ver detalhadamente
                    </Button>

                    <Modal
                      key={oferta.id}
                      title="Veiculo"
                      centered
                      visible={visible}
                      onOk={() => setVisible(false)}
                      onCancel={() => setVisible(false)}
                      width={1000}
                    >
                      <p> valor: {oferta.preco}</p>
                      <p>ano: {oferta.ano}</p>
                      <p>marca: {oferta.marca}</p>
                      <p>cidade: {oferta.cidade}</p>
    
                      
                      </Modal>
                  </Card>

              </div>
              );  
        })}
      </div>
          
      <Footer />
      
      </>
  );
}

export default Ofertas;