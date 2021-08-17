import React from 'react';
import './login.css'

function Login() {
    return <div className="d-flex align-items-center text-center form-div" >
        <form className="form-login">
    <img className="mb-4" src="Images/Logo_redes_sociais.jpg" alt="" width="150" height="120" />
    <h1 className="h3 mb-3 fw-normal">Login</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
      <label for="floatingInput">E-mail</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
      <label for="floatingPassword">Senha</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Acessar</button>
    <div className="login-links mt-1">
      <a href="#" className="mx-3"> Esqueci minha senha</a>
      <a href="#" className="mx-3"> Criar Cadastro</a>
    </div>
    <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Gustavo Brasil</p>
  </form>
    </div>;
}

export default Login;