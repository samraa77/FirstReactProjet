// src/component/Index.js

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// src/component/Index.js

// ... autres imports
const Index = () => {
    const themeColor = localStorage.getItem('themeColor') || 'light'; // Utiliser 'light' par défaut
    const isDarkTheme = themeColor === 'dark'; // Détermine si le thème est sombre

    return (
        <div style={{
            backgroundColor: themeColor,
            display: 'flex',
            justifyContent: 'flex-start',
            height: '77vh',
            padding: '10px'
        }}>
            {/* Ajustement du style du Menu pour être réactif */}
            <Menu
                mode="vertical"
                theme={isDarkTheme ? "dark" : "light"} // Appliquer le thème sombre si nécessaire
                style={{
                    width: '100%',
                    maxWidth: '200px',
                    borderRight: 'none'
                }}
            >
                <Menu.Item key="1"><Link to="/layout">Accueil</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/layout/VoirMonProfile">Voir Mon Profil</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/layout/ModifierCouleur">Modifier Couleur</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/layout/ListeUtilisateurs">Liste Utilisateurs</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/layout/AjouterUtilisateur">Ajouter Utilisateur</Link></Menu.Item>
            </Menu>
        </div>
    );
};

export default Index;

