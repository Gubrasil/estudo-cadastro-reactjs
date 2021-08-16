import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cadastro from './Cadastro';
import vendedoras from './vendedoras';

function App() {
    return <div>
        <Header texto="Cadastro de Vendedoras"/>
        <Cadastro cpf={vendedoras[0].cpf}
        nome={vendedoras[0].nome}
        telefone={vendedoras[0].telefone}
        senha={vendedoras[0].senha}/>

        <Cadastro cpf={vendedoras[1].cpf}
        nome={vendedoras[1].nome}
        telefone={vendedoras[1].telefone}
        senha={vendedoras[1].senha}/>

        <Cadastro cpf={vendedoras[2].cpf}
        nome={vendedoras[2].nome}
        telefone={vendedoras[2].telefone}
        senha={vendedoras[2].senha}/>
        
        <Footer />
    </div>;
}

export default App;