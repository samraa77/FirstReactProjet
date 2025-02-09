// src/component/LoginPage.js

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions';

const LoginPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSubmit = async (values) => {
        console.log('Données de connexion : ', values);

        try {
            const response = await axios.get('https://6772a68fee76b92dd492f93a.mockapi.io/elh/users');
            const users = response.data;

            const user = users.find(user => user.email === values.email && user.MotDePasse === values.MotDePasse);

            if (user) {
                // Met à jour le store avec les données de l'utilisateur connecté
                dispatch(setUser(user));
                navigate('/layout'); // Redirection vers la page d'accueil (Layout)
            } else {
                message.error('Email ou mot de passe incorrect.'); // Message d'erreur
            }
        } catch (error) {
            console.error('Erreur lors de la connexion : ', error);
            message.error('Une erreur s\'est produite lors de la connexion.'); // Message d'erreur général
        }
    };

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.8))`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                maxWidth: '400px',
                padding: '20px',
                backgroundColor: '#cccccc',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}>
                <h2 style={{ textAlign: 'center', color: 'black' }}>Connexion</h2>
                <Form onFinish={handleSubmit}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Veuillez entrer votre email!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Mot de Passe"
                        name="MotDePasse"
                        rules={[{ required: true, message: 'Veuillez entrer votre mot de passe!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit"
                            style={{ width: '100%', backgroundColor: 'rgb(121, 23, 23)', borderColor: 'rgb(121, 23, 23)' }}>
                            Se connecter
                        </Button>
                    </Form.Item>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/" style={{ color: 'black' }}>Pas de compte? Inscrivez-vous ici.</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
