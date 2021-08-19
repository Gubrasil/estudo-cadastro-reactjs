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
        firebase.adm.auth().createUser({
            uid: { cpf },
            email: { email },
            emailVerified: false,
            phoneNumber: { telefone },
            password: { senha },
            displayName: { nome },
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
            <form className="needs-validation" novalidate >
                <div className="form-row">

                    <div className="col-lg-6 mb-3">
                        <label className="control-label" for="cpf_form">CPF</label>
                        <input onChange={(event) => setCpf(event.target.value)} type="text" className="form-control" id="cpf_form" placeholder="CPF" maxlength="14" onkeypress={"formatar('###.###.###-##', this);"} required />
                    </div>


                    <div className="col-lg-6 mb-3">
                        <label for="validationCustom01">Nome Usuário</label>
                        <input onChange={(event) => setNome(event.target.value)} type="text" className="form-control" id="validationCustom01" placeholder="Nome" required />
                                            </div>



                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="floatingInput">Email</label>
                            <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label for="validationCustom01">Telefone</label>
                            <input onChange={(event) => setTelefone(event.target.value)} type="text" className="form-control" id="validationCustom01" placeholder="Telefone" required />
                            </div>


                        <div className="col-md-4 mb-3">
                            <label for="floatingPassword">Senha</label>
                            <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                        </div>

                        <button onClick={cadastraUsuario} className="btn btn-primary" type="button">Enviar</button>
                    </div>
                    
                </div>

            </form>

        </div>
    </div>;
}
export default NovoCadastro;