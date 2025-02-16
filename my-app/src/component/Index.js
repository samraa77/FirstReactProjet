import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Index = ({ userColor }) => {
    // Utiliser userColor pour la couleur de thème ou fallback à localStorage
    const themeColor = userColor || localStorage.getItem('themeColor') || 'light'; // Utiliser 'light' par défaut
    const isDarkTheme = themeColor === 'dark'; // Déterminer si le thème est sombre

    return (
        <div style={{
            backgroundColor: isDarkTheme , // Appliquer la couleur de fond en fonction du thème
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
                <Menu.Item key="2"><Link to="/layout/voir-mon-profile">Voir Mon Profil</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/layout/modifier-couleur">Modifier Couleur</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/layout/liste-utilisateurs">Liste Utilisateurs</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/layout/ajouter-utilisateur">Ajouter Utilisateur</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/layout/ajouter-demande">Ajouter Demande</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/layout/mes-demandes">Mes Demandes</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/layout/demandes-admin">List de DemandesA</Link></Menu.Item>

            </Menu>
        </div>
    );
};

export default Index;
