import React, { useState } from 'react';
import { db } from '../../services/firebase';

import './styles.css';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ModalCreateOfertt from '../../Components/ModalCreateOfertt';
import CardAdmin from '../../Components/CardAdmin';


const Administracao = () => {

    const [idUsando, setidUsando] = useState('');

    const cadastrarOferta = async (linkObject) => {
        await db.collection('ofertas').doc().set(linkObject);
        setidUsando('');    
    }

    return (
      <>
      
      <Header />

        <div className="ContainerAdmin">

            <div className="BannerAdmin">
                <h2>Bem vindo a central administrativa </h2>
                <ModalCreateOfertt {...{cadastrarOferta, idUsando}}/>
            </div>
                <CardAdmin />
           

        </div>
      
      <Footer />

      </>
  );
}

export default Administracao;