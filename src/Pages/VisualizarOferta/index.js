import React, {useState, useEffect} from 'react'
import './styles.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'

import { Card } from 'antd';
import { db } from '../../services/firebase';


const VisualizarOferta = () => {

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
            <Header/>

            <div className="Banner">
                <h2>VENHA CONFERIR COMPLETAMENTE NOSSAS OFERTAS</h2>
            </div>
            <div className="ContainerOferta">

            
            { ofertas.map( oferta => {
              return(
                <div className="ContentOferta" key={oferta.id}>
                  <Card 
                  className="CardOferta" 
                  hoverable
                  title={` ${oferta.marca} - ${oferta.modelo} (Ano ${oferta.ano})`}
                  
                  >
                    <img alt="example" src={oferta.fotos} />

                    <p>Cor ({oferta.cor})</p>
                    <p>Cidade ({oferta.cidade})</p>
                    <p>Placa ({oferta.placa})</p>
                    <p>KM/r ({oferta.quilometragem}/km/r)</p>
                    <p>Data de cadastro ({oferta.dataDeCadastro})</p>
                    <p>{oferta.numerVisualizacoes}</p>
                    
                  </Card>
              </div>
              );  
             
        })}
     
     </div>
           

            <Footer/>
        </>
    );
}

export default VisualizarOferta;