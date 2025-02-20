import React, { useState, useEffect } from 'react';   
import { useDispatch, useSelector } from 'react-redux';   
import { login } from '../store/actions';   
import { Link, useNavigate } from 'react-router-dom';   
import { Form, Input, Button, notification } from 'antd';  
import axios from 'axios';  

const Auth = () => {   
    const dispatch = useDispatch();   
    const navigate = useNavigate();   
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });  

    const auth = useSelector((state) => state.auth);   
    const error = auth?.error;   
    const successMessage = auth?.success;   

    useEffect(() => {  
        const handleMouseMove = (event) => {  
            setMousePosition({ x: event.clientX, y: event.clientY });  
        };  
        
        window.addEventListener('mousemove', handleMouseMove);  
        return () => {  
            window.removeEventListener('mousemove', handleMouseMove);  
        };  
    }, []);  

    // Vérification de l'état d'authentification   
    useEffect(() => {   
        if (auth.isAuthenticated) {   
            navigate('/home'); // Redirection si l'utilisateur est déjà connecté   
        }   
    }, [auth.isAuthenticated, navigate]);  

    // Gestion de la connexion avec les valeurs du formulaire  
    const handleLogin = async (values) => {   
        const { email, motDePasse } = values;  
        
        try {   
            const response = await axios.get('https://6772a68fee76b92dd492f93a.mockapi.io/elh/users');   
            const users = response.data;  

            const user = users.find(user => user.email === email && user.MotDePasse === motDePasse);  
            
            if (user) {   
                dispatch(login(user)); // Passer l'utilisateur complet au redux (s'il le faut)  
                navigate('/home');   
            } else {  
                console.log("User not found");  
                notification.error({ message: 'Email ou mot de passe incorrect.' });  
            }   
        } catch (error) {   
            console.error('Erreur de connexion: ', error);  
            notification.error({   
                message: 'Erreur de connexion',   
                description: error.response?.data?.message || 'Une erreur s\'est produite lors de la connexion.',   
            });   
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
                backgroundColor: localStorage.getItem('userColor') || '#cccccc',  
                borderRadius: '8px',  
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',  
            }}>  
                <h2 style={{ textAlign: 'center', color: 'black' }}>Connexion</h2>  
                <Form onFinish={handleLogin}>  
                    <Form.Item  
                        label="Email"  
                        name="email"  
                        rules={[{ required: true, message: 'Veuillez entrer votre email!' }]}>  
                        <Input type="email" />  
                    </Form.Item>  
                    <Form.Item  
                        label="Mot de Passe"  
                        name="motDePasse"  
                        rules={[{ required: true, message: 'Veuillez entrer votre mot de passe!' }]}>  
                        <Input.Password />  
                    </Form.Item>  
                    <Form.Item style={{ textAlign: 'center' }}>  
                        <Button   
                            type="primary"   
                            htmlType="submit"   
                            style={{ width: '100%', backgroundColor: 'rgb(121, 23, 23)', borderColor: 'rgb(121, 23, 23)' }}>  
                            Se connecter  
                        </Button>  
                    </Form.Item>  
                    <div style={{ textAlign: 'center' }}>  
                        <Link to="/" style={{ color: 'black' }}>Pas de compte? Inscrivez-vous ici.</Link>  
                    </div>  
                </Form>  
                {error && <p style={{ color: 'red' }}>{error.message || 'Erreur de connexion.'}</p>}   
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}   
            </div>  
        </div>  
    );  
};   

export default Auth;