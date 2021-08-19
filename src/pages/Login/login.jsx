import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/menu';
import './login.css'

function Login() {
  return <div className="d-flex align-items-center text-center form-div" >
    
      <Menu />
      <div className="container-fluid">
      
      <form className="form-login">
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label for="floatingPassword">Senha</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>
        <div className="login-links mt-1">
          <Link to="/" className="mx-3"> Esqueci minha senha</Link>
          <Link to="/novocadastro" className="mx-3"> Criar Cadastro</Link>
        </div>
        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Gustavo Brasil</p>
      </form>
    </div>
  </div>;
}

export default Login;