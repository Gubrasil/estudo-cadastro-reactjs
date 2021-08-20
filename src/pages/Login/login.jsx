import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/menu';
import './login.css'

import firebase from '../../config/firebase.js';
import 'firebase/auth'

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');

  function LoginUsuario() {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function (result) {
        setSucesso('S');
        alert("usuário Logado com sucesso");
      })
      .catch(function (error) {
        setSucesso('N');
      })

  }

  return <div className="d-flex align-items-center text-center form-container" >
    <Menu />
    <form className="form-login">
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label for="floatingInput">E-mail</label>
      </div>
      <div className="form-floating">
        <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label for="floatingPassword">Senha</label>
      </div>
      <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

      {
        //verificar se autenticação foi sucesso e emite mensagem de erro
        sucesso === 'N' ? <div class="alert alert-danger mt-2" role="alert" >E-mail ou senha inválido.</div>: null
      }
      

      <div className="login-links mt-1">
        <Link to="/" className="mx-3"> Esqueci minha senha</Link>
        <Link to="/novocadastro" className="mx-3"> Criar Cadastro</Link>
      </div>
      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Gustavo Brasil</p>
    </form>
  </div >;
}

export default Login;