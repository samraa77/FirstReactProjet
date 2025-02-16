import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importer les composants de mouvement de page
import RegistrationForm from './component/RegistrationForm'; // Composant de la page d'inscription
import LoginPage from './component/LoginPage'; // Composant de la page de connexion
import Layout from './component/Layout'; // Composant de mise en page principale

// Importer les nouveaux composants de page
import Accueil from './component/Accueil'; // Page d'accueil
import VoirMonProfile from './component/VoirMonProfile'; // Page de profil
import ModifierCouleur from './component/ModifierCouleur'; // Page de changement de couleur
import ListeUtilisateurs from './component/ListeUtilisateurs'; // Page liste des utilisateurs
import AjouterUtilisateur from './component/AjouterUtilisateur'; // Page d'ajout utilisateur
import AjouterDemande from './component/AjouterDemande'; // Page d'ajout de demande
import MesDemandes from './component/MesDemandes'; // Liste des demandes utilisateur
import ListDemandesA from './component/ListeDemandesA'; // Liste des demandes administratives

const App = () => {
    const [userColor, setUserColor] = useState('white'); // Valeur par défaut pour la couleur de fond

    // Charger la couleur de fond de l'utilisateur à partir du stockage local
    useEffect(() => {
        const storedColor = localStorage.getItem('userColor');
        if (storedColor) {
            setUserColor(storedColor);
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<RegistrationForm />} /> {/* Route pour la page d'inscription */}
            <Route path="/login" element={<LoginPage />} /> {/* Route pour la page de connexion */}
            <Route path="/layout" element={<Layout userColor={userColor} />}> {/* Passer couleur à Layout */}
                <Route index element={<Accueil />} /> {/* Page d'accueil par défaut */}
                <Route path="voir-mon-profile" element={<VoirMonProfile />} /> {/* Page pour voir le profil de l'utilisateur */}
                <Route path="modifier-couleur" element={<ModifierCouleur />} /> {/* Page pour modifier la couleur */}
                <Route path="liste-utilisateurs" element={<ListeUtilisateurs />} /> {/* Page pour afficher la liste des utilisateurs */}
                <Route path="ajouter-utilisateur" element={<AjouterUtilisateur />} /> {/* Page pour ajouter un nouvel utilisateur */}
                <Route path="ajouter-demande" element={<AjouterDemande />} /> {/* Page pour ajouter une demande */}
                <Route path="mes-demandes" element={<MesDemandes />} /> {/* Liste des demandes de l'utilisateur */}
                <Route path="demandes-admin" element={<ListDemandesA />} /> {/* Liste des demandes administratives */}
            </Route>
        </Routes>
    );
};

export default App;
