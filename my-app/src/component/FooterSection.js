import React from 'react';

const FooterSection = ({ userColor }) => {
    // Utilisation de la couleur fournie par userColor ou fallback à localStorage
    const themeColor = userColor || localStorage.getItem('themeColor') || '#333'; // Couleur par défaut

    return (
        <footer style={{
            backgroundColor: themeColor, // Appliquer la couleur de thème choisie
            color: themeColor === '#333' ? '#fff' : '#000', // Déterminer la couleur du texte en fonction du fond
            padding: '10px',
            textAlign: 'center',
            position: 'relative'
        }}>
            <p>Pied de page contenu ici © 2025</p> {/* Mettez à jour l'année si nécessaire */}
        </footer>
    );
};

export default FooterSection;
