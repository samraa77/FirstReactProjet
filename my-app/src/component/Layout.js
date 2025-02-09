// src/component/Layout.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import NavigationBar from './NavigationBar';
import Index from './Index';
import FooterSection from './FooterSection';
import { resetForm } from '../store/actions';

const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleLogout = () => {
        dispatch(resetForm());
        navigate('/login');
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.8))`,
        }}>
            <HeaderSection
                name={`${user.prenom} ${user.nom}`}
                onLogout={handleLogout}
            />
            <NavigationBar />
            <div style={{
                display: 'flex', // Utilisation de flexbox
                flexGrow: 1,
                overflow: 'hidden', // Empêche les débordements
            }}>
                {/* Index est fixe à gauche */}
                <div style={{
                    width: '200px', // Largeur fixe pour Index
                    backgroundColor: 'light', // Couleur d'arrière-plan pour le menu
                    position: 'fixed', // Fixée sur le côté gauche
                    top: '130px', // Ajustez si nécessaire pour tenir compte du Header
                    bottom: '0', // Fixe jusqu'en bas
                    padding: '10px',
                }}>
                    <Index />
                </div>
                {/* Outlet est flexible à droite */}
                <div style={{
                    marginLeft: '200px', // Espace pour le menu
                    padding: '20px',
                    flexGrow: 1,
                    overflowY: 'auto', // Permet le défilement si nécessaire
                }}>
                    <Outlet /> {/* Détails des pages enfants */}
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default Layout;
