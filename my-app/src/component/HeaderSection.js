import React from 'react';
import { useDispatch } from 'react-redux';
import { resetForm } from '../store/actions';
import { useNavigate } from 'react-router-dom';

const HeaderSection = ({ name, userColor }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(resetForm());
        navigate('/login');
    };

    // Prendre userColor comme priorité, sinon utiliser l'ancienne logique
    const themeColor = userColor || localStorage.getItem('themeColor') || '#333';

    return (
        <header style={{
            backgroundColor: themeColor,
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Ombre pour un effet 3D
        }}>
            {/* Logo de l'application */}
            <img
                src={`${process.env.PUBLIC_URL}/logo192.png`}
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
                    backgroundColor: 'rgb(121, 23, 23)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 20px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease',
                    outline: 'none', // Retirer l'outline par défaut
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgb(150, 30, 30)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgb(121, 23, 23)'}
                aria-label="Se Déconnecter" // Accessibilité
            >
                Se Déconnecter
            </button>
        </header>
    );
};

export default HeaderSection;
