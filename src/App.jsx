import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Paginas */
import Home from './site/home.jsx';
import Login from './app/login.jsx';


function App() {
    return <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/app' component={Login} />
    </BrowserRouter>
}

export default App;