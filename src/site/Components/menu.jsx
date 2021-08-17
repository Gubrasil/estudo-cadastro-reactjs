import React from 'react';

function Menu() {
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="Images/Logo_redes_sociais.jpg" alt="" height="100" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Cadastro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#footer">Contato</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>;
}

export default Menu;