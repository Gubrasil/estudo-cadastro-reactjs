import React from 'react';

function Cadastro(props){
    return <div>
        <p>{props.cpf}</p>
        <p>{props.nome}</p>
        <p>{props.telefone}</p>
        <p>{props.senha}</p>
        </div>
}

export default Cadastro;