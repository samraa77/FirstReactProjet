// src/component/HeaderSection.js

import React from 'react';
import { useDispatch } from 'react-redux'; // Importer useDispatch pour envoyer des actions
import { resetForm } from '../store/actions'; // Assurez-vous que cette action existe
import { useNavigate } from 'react-router-dom';

const HeaderSection = ({ name }) => {
    const dispatch = useDispatch(); // Accès au dispatch pour envoyer des actions
    const navigate = useNavigate(); // Pour la redirection vers Login

    const handleLogout = () => {
        dispatch(resetForm()); // Réinitialiser le store
        navigate('/login'); // Rediriger vers la page de connexion
    };
    
    // Récupération de la couleur thématique depuis localStorage avec une valeur par défaut
    const themeColor = localStorage.getItem('themeColor') || '#333'; 
    
    return (
        <header style={{
            backgroundColor: themeColor, // Applique la couleur thème
            color: '#fff',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease' // Pour une transition douce
        }}>
            {/* Remplace le h1 par un logo depuis le dossier public */}
            <img
                src={`${process.env.PUBLIC_URL}/logo192.png`} // Chemin vers l'image
                alt="Logo"
                style={{
                    height: '40px',
                    filter: 'invert(79%) sepia(190%) saturate(900%) hue-rotate(315deg) brightness(50%) contrast(180%)'
                }}
            />
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</span>
            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: 'rgb(121, 23, 23)', // Vous pourriez également faire de cette couleur une variable dynamique
                    color: 'white',
                    border: 'none',
                    padding: '5px 15px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease', // Pour une transition douce
                    fontSize: '16px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(150, 30, 30)'} // Changement de couleur au survol
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(121, 23, 23)'} // Rétablissement de la couleur
            >
                Se Déconnecter
            </button>
        </header>
    );
};

export default HeaderSection;
