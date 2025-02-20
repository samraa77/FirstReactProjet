import React from 'react';

const FooterSection = ({ userColor }) => {
    
    return (
        <footer style={{
            backgroundColor: userColor , // Use user color or fallback to default
            padding: '10px',
            textAlign: 'center',
            position: 'relative'
        }}>
            <p>Pied de page contenu ici © {new Date().getFullYear()}</p> {/* Automatically updates the year */}
        </footer>
    );
};

export default FooterSection;
