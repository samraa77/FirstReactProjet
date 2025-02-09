// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './component/RegistrationForm'; // Composant de la page d'inscription
import LoginPage from './component/LoginPage'; // Composant de la page de connexion
import Layout from './component/Layout'; // Assurez-vous que c'est le bon chemin

// Importer les nouveaux composants de page
import Accueil from './component/Accueil'; // Page d'accueil
import VoirMonProfile from './component/VoirMonProfile'; // Page de profil
import ModifierCouleur from './component/ModifierCouleur'; // Page de changement de couleur
import ListeUtilisateurs from './component/ListeUtilisateurs'; // Page liste des utilisateurs
import AjouterUtilisateur from './component/AjouterUtilisateur'; // Page d'ajout utilisateur

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/layout" element={<Layout />}>
                <Route index element={<Accueil />} /> {/* Page d'accueil par défaut */}
                <Route path="VoirMonProfile" element={<VoirMonProfile />} />
                <Route path="ModifierCouleur" element={<ModifierCouleur />} />
                <Route path="ListeUtilisateurs" element={<ListeUtilisateurs />} />
                <Route path="AjouterUtilisateur" element={<AjouterUtilisateur />} />
            </Route>
            {/* Ajoutez d'autres routes ici si nécessaire */}
        </Routes>
    );
};

export default App;
