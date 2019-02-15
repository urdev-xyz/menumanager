import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Pages/Login/Login';

import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
                <Redirect exact from='/' to="/login"/>
                <Route path='/(login|home)/' component={Login}/>
                <Route path='/app/:page' component={App}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
