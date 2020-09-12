import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase';

import { Modal, Button  } from 'antd';


const ModalEditOfertt = (props) => {

    const iniciandoForm = {
        cor: '',
        marca:'',
        modelo:'',
        ano: undefined,
        preco: '',
        quilometragem: undefined,
        cidade: '',
        placa: '',
        fotos: [],
        dataDeCadastro: '',
        numerVisualizacoes: 0,
    };

    const [valores, setValores] = useState(iniciandoForm);
    const [visible, setVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target; 
        setValores({...valores, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditLink(valores);
        setValores({...iniciandoForm});
    
    };

    
    const getLinkById = async (id) => {
        const doc = await db.collection('ofertas').doc(id).get();
        setValores({...doc.data()})
     }
 
     useEffect(() => {
         if(props.idUsando === ''){
             setValores({...iniciandoForm});
         } else {
             getLinkById(props.idUsando);
         }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [props.idUsando]) 

    
    
    return (
        <>
            <Button type="primary" shape="round" onClick={() => setVisible(true)}>
                    <span>Informe o que Editar</span>
            </Button>

            <div className="ContainerModal">
              <Modal
                title="Editar oferta"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={false}
                height={1000}
                width={600}
                
            >
                <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text" 
                placeholder="Cor"
                name="cor" 
                onChange={handleInputChange}
                value={valores.cor}
                />

                <input 
                type="text" 
                placeholder="Marca"
                name="marca" 
                onChange={handleInputChange}
                value={valores.marca}
                />

                <input 
                type="text" 
                placeholder="Modelo"
                name="modelo" 
                onChange={handleInputChange}
                value={valores.modelo}
                />

                <input 
                type="number" 
                placeholder="Ano"
                name="ano" 
                onChange={handleInputChange}
                value={valores.ano}
                />

                <input 
                type="text" 
                placeholder="Preço"
                name="preco" 
                onChange={handleInputChange}
                value={valores.preco}
                />

                <input  
                type="number" 
                placeholder="Quilometragem"
                name="quilometragem" 
                onChange={handleInputChange}
                value={valores.quilometragem}
                />

                <input 
                type="text" 
                placeholder="Cidade"
                name="cidade" 
                onChange={handleInputChange}
                value={valores.cidade}
                />

                <input 
                type="text" 
                placeholder="Placa"
                name="placa" 
                onChange={handleInputChange}
                value={valores.placa}
                />

                <input 
                type="text" 
                placeholder="Data de cadastro"
                name="dataDeCadastro" 
                onChange={handleInputChange}
                value={valores.dataDeCadastro}
                />
                <input 
                type="text" 
                placeholder="Fotos"
                name="fotos" 
                onChange={handleInputChange}
                value={valores.fotos}
                />

                <button onClick={() => setVisible(false)}>{props.idUsando === '' ? 'Cadastrar': 'Editar'}</button>
            </div>

            <hr/>
        </form>
              
                </Modal>
              </div>
        </>
    );

  }

export default ModalEditOfertt;

