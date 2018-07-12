import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './components/Register/Register';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(


    <BrowserRouter>
        <Route path="/" component={Register} exact/>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();

