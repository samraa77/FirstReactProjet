// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Avec React 18
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}> {/* Fournir le store Redux */}
        <BrowserRouter> {/* Uniquement ici */}
            <App />
        </BrowserRouter>
    </Provider>
);
