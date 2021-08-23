import React from 'react';
import Menu from '../../Components/menu';
import ListaVendedoras from '../../Components/ListaVendedoras/listavendedoras';
import './vendedorasCadastradas.css';

function VendedorasCadastradas(){
    return <div>
      <Menu/>
      <div className="container-fluid titulo">
        <h1>Vendedor(as) Cadastrados(as)</h1>
        <ListaVendedoras />
      </div>      
    </div>
  }

export default VendedorasCadastradas;