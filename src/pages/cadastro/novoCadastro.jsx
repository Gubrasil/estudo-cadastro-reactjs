import React, { useState } from 'react';
import Menu from '../../Components/menu';

import './novoCadastro.css';

import firebase from '../../config/firebase';
import 'firebase/auth';


function NovoCadastro() {

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    function cadastraUsuario() {
        firebase.auth().createUser({
            uid: cpf,
            email: email,
            emailVerified: false,
            phoneNumber: telefone,
            password: senha,
            displayName: nome,
            photoURL: ' ',
            disabled: false,
        })
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
            })
            .catch((error) => {
                console.log('Error creating new user:', error);
            });

    }

    return <div classNameName="d-flex align-items-center text-center form-cad" >
        <Menu />
        <div className="container-fluid">
            <form autoComplete="off">
                <div className="form-row row-1">
                    <div className="form-group input-group col-md-6" >
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input onChange={(event) => setNome(event.target.value)} type="text" className="form-control" placeholder="Nome" name="Nome Completo" />
                    </div>
                    <div className="form-group input-group col-md-6" >
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input onChange={(event) => setCpf(event.target.value)} type="text" className="form-control" id="cpf_form" placeholder="CPF" maxlength="14" onkeypress={"formatar('###.###.###-##', this);"} required />
                    </div>
                </div>

                <div className="form-row row-2">
                    <div className="form-group input-group col-md-6" >
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" placeholder="Email" name="Email" />
                    </div>

                    <div className="form-group input-group col-md-6" >
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile"></i>
                            </div>
                        </div>
                        <input onChange={(event) => setTelefone(event.target.value)} type="mobile" className="form-control" placeholder="Telefone" name="Telefone" />
                    </div>


                    <div className="form-group input-group col-md-6" >
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control" placeholder="Senha" name="Senha" />
                    </div>
                </div>

                <button onClick={cadastraUsuario} className="btn btn-primary" type="button">Enviar</button>



            </form >

        </div >
    </div >;
}
export default NovoCadastro;