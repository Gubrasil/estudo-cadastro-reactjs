import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*Paginas */
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import NovoCadastro from './pages/cadastro/novoCadastro.jsx';
import VendedorasCadastradas from './pages/vendedorasCadastradas/vendedorasCadastradas.jsx';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/novocadastro' component={NovoCadastro} />
                <Route exact path='/listavendedoras' component={VendedorasCadastradas} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;