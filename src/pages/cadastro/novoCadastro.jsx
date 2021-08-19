import React from 'react';
import Menu from '../../Components/menu';

import './novoCadastro.css';

function NovoCadastro() {
    return <div classNameName="d-flex align-items-center text-center form-cad" >
        <Menu />
        <div className="container-fluid">
            <form className="needs-validation" novalidate >
                <div className="form-row">
                    <div className="col-lg-4 mb-3">
                        <label for="validationCustom01">Primeiro nome</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Nome" required />
                        <div className="valid-feedback">
                            Tudo certo!
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <label for="validationCustom02">Sobrenome</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Sobrenome" required />
                        <div className="valid-feedback">
                            Tudo certo!
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <label className="control-label" for="cpf_form">CPF</label>
                        <input type="text" className="form-control" id="cpf_form" placeholder="CPF" maxlength="14" onkeypress={"formatar('###.###.###-##', this);"} required />
                        <div className="valid-feedback">
                            Tudo certo!
                        </div>
                    </div>

                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom03">Cidade</label>
                        <input type="text" className="form-control" id="validationCustom03" placeholder="Cidade" required />
                        <div className="invalid-feedback">
                            Por favor, informe uma cidade válida.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom04">Estado</label>
                        <input type="text" className="form-control" id="validationCustom04" placeholder="Estado" required />
                        <div className="invalid-feedback">
                            Por favor, informe um estado válido.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom05">CEP</label>
                        <input type="text" className="form-control" id="validationCustom05" placeholder="CEP" required />
                        <div className="invalid-feedback">
                            Por favor, informe um CEP válido.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Concordo com os termos e condições
                        </label>
                        <div className="invalid-feedback">
                            Você deve concordar, antes de continuar.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    </div>;
}

export default NovoCadastro;