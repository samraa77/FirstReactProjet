import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import NavigationBar from './NavigationBar';
import Index from './Index';
import FooterSection from './FooterSection';
import { resetForm } from '../store/actions';

const Layout = ({ userColor }) => {
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
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.3), ${userColor ? userColor : 'rgba(0, 0, 0, 0.8)'})`, // Utilisation de la couleur stockée
        }}>
            <HeaderSection
                name={`${user.prenom} ${user.nom}`}
                onLogout={handleLogout}
                userColor={userColor} // Passer userColor au header
            />
            <NavigationBar userColor={userColor} /> 
            <div style={{
                display: 'flex',
                flexGrow: 1,
                overflow: 'hidden',
            }}>
                {/* Index est fixe à gauche */}
                <div style={{
                    width: '200px',
                    position: 'fixed',
                    top: '130px',
                    bottom: '0',
                    padding: '10px',
                }}>
                    <Index userColor={userColor} />
                </div>
                {/* Outlet est flexible à droite */}
                <div style={{
                    marginLeft: '200px',
                    padding: '20px',
                    flexGrow: 1,
                    overflowY: 'auto',
                }}>
                    <Outlet /> {/* Détails des pages enfants */}
                </div>
            </div>
            <FooterSection userColor={userColor} />
        </div>
    );
};

export default Layout;
