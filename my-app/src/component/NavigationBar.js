// src/component/NavigationBar.js

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const themeColor = localStorage.getItem('themeColor') || '#444';
    
    // Déterminer si la couleur est sombre, pour ajuster le texte
    const isDarkTheme = (themeColor === '#444' || themeColor === 'dark'); // Modifiez ceci pour d'autres couleurs sombres

    return (
        <nav style={{ padding: '10px', backgroundColor: themeColor }}>
            <Menu
                mode="horizontal"
                theme={isDarkTheme ? "dark" : "light"} // Changer le thème en fonction de la couleur
                style={{ backgroundColor: themeColor, border: 'none' }}
            >
                <Menu.Item key="1"><Link to="/layout" style={{ color: isDarkTheme ? '#fff' : '#000' }}>Accueil</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/layout/VoirMonProfile" style={{ color: isDarkTheme ? '#fff' : '#000' }}>Voir Mon Profil</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/layout/ModifierCouleur" style={{ color: isDarkTheme ? '#fff' : '#000' }}>Modifier Couleur</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/layout/ListeUtilisateurs" style={{ color: isDarkTheme ? '#fff' : '#000' }}>Liste Utilisateurs</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/layout/AjouterUtilisateur" style={{ color: isDarkTheme ? '#fff' : '#000' }}>Ajouter Utilisateur</Link></Menu.Item>
            </Menu>
        </nav>
    );
};

export default NavigationBar;
