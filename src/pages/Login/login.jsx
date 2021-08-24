import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        console.log(result)
        alert("Logado com sucesso");
      })
      .catch(function (error) {
        setSucesso('N');
      })

  }

  return <div className="d-flex align-items-center text-center form-container" >
    <Menu />
    <div className="container-fluid titulo" >
      <h1 className="h3 mb-3 fw-normal">Login</h1>
      <form className="form-login align-itens-center">
        <div className="form-floating">
          <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
          <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>
        <div className="text-center">
          <button onClick={LoginUsuario} className="btn btn-primary" type="button">Acessar</button>
        </div>
        {sucesso === 'N' ? <div class="alert alert-danger mt-2" role="alert" >E-mail ou senha inválido.</div> : null}
        {sucesso === 'S' ? <Redirect to='/listavendedoras' /> : null}
        <div className="login-links mt-1">
          <Link to="/" className="mx-3"> Esqueci minha senha</Link>
          <Link to="/novocadastro" className="mx-3"> Criar Cadastro</Link>
        </div>
      </form>
      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Gustavo Brasil</p>
    </div>

  </div >;
}

export default Login;