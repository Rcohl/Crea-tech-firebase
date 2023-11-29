// index.js (ou votre fichier racine)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app'; // Importez firebase/app pour l'initialisation
import 'firebase/compat/storage'; // Importez d'autres modules Firebase si nécessaire

// Initialisez Firebase avec votre configuration
const firebaseConfig = {
  // Vos informations de configuration Firebase
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Si déjà initialisé, utilisez celui-ci
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
