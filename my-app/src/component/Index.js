import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importer useSelector  


const Index = () => {
    const user = useSelector((state) => state.auth.user); // Récupérer l'utilisateur depuis le store Redux  
  
  const isAdmin = user && user.admin; // Vérifier si l'utilisateur est admin  


    return (
        <div style={{
            backgroundColor:  '#fff', // Appliquer la couleur de fond en fonction du thème
            display: 'flex',
            justifyContent: 'flex-start',
            height: '77vh',
            padding: '10px'
        }}>
            <Menu
                mode="vertical"
                theme={ "light"} // Appliquer le thème sombre si nécessaire
                style={{
                    width: '100%',
                    maxWidth: '200px',
                    borderRight: 'none'
                }}
            >
                <Menu.Item key="1"><Link to="/home">Accueil</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/home/voir-mon-profile">Voir Mon Profil</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/home/modifier-couleur">Modifier Couleur</Link></Menu.Item>
                
        {/* Afficher les éléments de menu spécifiques à l'admin */}  
        {isAdmin && (  
            <>
                <Menu.Item key="4"><Link to="/home/liste-utilisateurs">Liste Utilisateurs</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/home/ajouter-utilisateur">Ajouter Utilisateur</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/home/demandes-admin">Liste de Demandes Admin</Link></Menu.Item>
                </>
        )}  

            {/* Éléments de menu pour tous les utilisateurs */}  
            {!isAdmin && (  
                <>
                <Menu.Item key="6"><Link to="/home/ajouter-demande">Ajouter Demande</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/home/mes-demandes">Mes Demandes</Link></Menu.Item>
                </>
            )}  

            </Menu>
        </div>
    );
};

export default Index;
