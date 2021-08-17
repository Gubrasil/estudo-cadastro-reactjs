import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Paginas */
import Home from './pages/home/home.jsx';
import Login from './pages/Login/login.jsx';


function App() {
    return <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    </BrowserRouter>
}

export default App;