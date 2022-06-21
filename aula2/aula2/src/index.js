import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Usuarios from './componentes/Usuarios';
import Postagens from './componentes/Postagens';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Postagens />
    <App />
    <Usuarios />
  </>
);


