import React, { useState, useEffect } from 'react';
import './listaVendedoras.css';

import firebase from '../../config/firebase';

function ListaVendedoras(){

    const [vendedoras, setVendedoras] = useState([]);
    let listaVends = [];

    useEffect(function(){
        firebase.firestore().collection('cadastro_vendedoras').get().then(async function(resultado){
            await resultado.docs.forEach(function(doc){
                listaVends.push({
                        nome: doc.data().nome,
                        cpf: doc.data().cpf,
                        email: doc.data().email,
                        fone: doc.data().telefone
                    });
            })

            setVendedoras(listaVends);
        })
    }, [setVendedoras]);

    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
            </tr>
            </thead>
            <tbody>

            {
                vendedoras.map((vendedora) => {
                    return <tr key={vendedora.id}>
                    <th scope="row">{vendedora.nome}</th>
                    <td>{vendedora.cpf}</td>
                    <td>{vendedora.email}</td>
                    <td>{vendedora.fone}</td>
                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListaVendedoras;