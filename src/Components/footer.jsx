import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.facebook.com/1mais1brasilia/"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/Gubrasil"><i className="fab fa-github fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/1mais1brasilia/?hl=pt-br"><i className="fa fa-instagram fa-2x"></i></a></li>						
                <li className="list-inline-item"><a href="gubrasil@gmail.com.br" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:gubrasil@gmail.com.br">gubrasil@gmail.com.br</a>
      <p>Desenvolvido por Gustavo Brasil - {ano}</p>

    </section>;
  }

export default Footer;

