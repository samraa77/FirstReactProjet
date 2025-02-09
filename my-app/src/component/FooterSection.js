// src/component/FooterSection.js

import React from 'react';

const FooterSection = () => {
    // Récupération de la couleur depuis localStorage
    const themeColor = localStorage.getItem('themeColor') || '#333'; // Couleur par défaut

    return (
        <footer style={{
            backgroundColor: themeColor, // Appliquer la couleur de thème choisie
            color: themeColor === '#333' ? '#fff' : '#000', // Déterminer la couleur du texte en fonction du fond
            padding: '10px',
            textAlign: 'center',
            position: 'relative'
        }}>
            <p>Pied de page contenu ici © 2023</p>
        </footer>
    );
};

export default FooterSection;
