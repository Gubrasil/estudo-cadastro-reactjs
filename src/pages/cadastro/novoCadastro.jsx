import React, { useState } from 'react';
import Menu from '../../Components/menu';
import './novoCadastro.css';

import firebase from '../../config/firebase';
import 'firebase/auth';


function NovoCadastro() {

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    const db = firebase.firestore();

    // function CriaLogin() {
    //     firebase.auth().signInWithEmailAndPassword(email, senha)
    //         .then(function (firebaseUser) {
    //             setSucesso('S');
    //         })
    //         .catch(function (error) {
    //             setSucesso('N');
    //         });
    // }

    function cadastraUsuario() {
        if (nome.length === 0) {
            setMensagem('Informe o Nome');
        }
        else if (cpf.length === 0) {
            setMensagem('Informe o CPF');
        }
        else if (email.length === 0) {
            setMensagem('Informe o e-mail');
        }
        else if (telefone.length === 0) {
            setMensagem('Informe o telefone');
        }
        else if (senha.length === 0) {
            setMensagem('Informe a senha');
        }
        else {
            db.collection('cadastro_vendedoras').add({
                id: cpf,
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha
            }).then(() => {
                setMensagem('Vendedor(a) ' + { nome } + ' cadastrado com sucesso');
                setSucesso('S');
            }).catch((erro) => {
                setMensagem(erro);
                setSucesso('N');
            })
        }
    }

    return <div>
        <Menu />
        <div className="container-fluid titulo" >
            <form className="form-cadastro">
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
                <div className="text-center">
                    <button onClick={cadastraUsuario} className="btn btn-primary" type="button">Enviar</button>
                </div>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                {sucesso === 'S' ? <div className="alert alert-success" role="alert">{mensagem}</div> : null}

            </form >

        </div >
    </div >;
}

export default NovoCadastro;