import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';

const LinkForm = (props) => {
    
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
        dataDeCadastro: ''
    };

    const [valores, setValores] = useState(iniciandoForm);


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

            <button >{props.idUsando === '' ? 'Cadastrar': 'Editar'}</button>
            </div>

            <hr/>
        </form>
    );
}

export default LinkForm;