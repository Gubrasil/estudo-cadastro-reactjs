import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Bem-vindo à loja infantil mais fofa de Brasília.</h1>
                    <h4>Ficamos Felizes em tê-la conosco. Faça seu cadastro como vendedora. Caso já tenha feito, faça Login</h4>
                    <button type="button" className="btn btn-dark btn-lg btn-banner">Fazer Cadastro</button>
                    <button type="button" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</button>
                </div>

                <div className="col-lg-6">
                    <img src="Images/Foto_loja.jpg" />
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;