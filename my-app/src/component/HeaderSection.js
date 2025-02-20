import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { logout } from '../store/actions';  
import { useNavigate } from 'react-router-dom';  
import { useMediaQuery } from 'react-responsive';  
import { Button, Layout, Typography, Space } from 'antd';  
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';  

const { Header } = Layout;  
const { Title } = Typography;  

const HeaderSection = ({ userColor }) => {  
    const isColorBright = (hexColor) => {  
        if (!hexColor) return false;  
        const hex = hexColor.replace('#', '');  
        const r = parseInt(hex.substring(0, 2), 16);  
        const g = parseInt(hex.substring(2, 4), 16);  
        const b = parseInt(hex.substring(4, 6), 16);  
        const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;  
        return brightness > 128;  
    };  
    
    const textColor = isColorBright(userColor) ? '#000' : '#fff';  
    const dispatch = useDispatch();  
    const navigate = useNavigate();  
    const auth = useSelector((state) => state.auth);  
    const isMobile = useMediaQuery({ maxWidth: 768 });  

    const handleLogout = () => {  
        dispatch(logout());  
        navigate('/login');  
    };  

    return (  
        <Header  
            style={{  
                backgroundColor: userColor,  
                padding: isMobile ? '10px' : '10px 20px',  
                display: 'flex',  
                justifyContent: 'space-between',  
                alignItems: 'center',  
                transition: 'background-color 0.3s ease',  
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',  
                height: 'auto',  
            }}  
        >  
            {/* Logo */}  
            <img  
                src={`${process.env.PUBLIC_URL}/logo192.png`}  
                alt="Logo"  
                style={{  
                    height: '40px',  
                    filter: 'invert(79%) sepia(190%) saturate(900%) hue-rotate(315deg) brightness(50%) contrast(180%)'  
                }}  
            />  

            {/* Titre/Nom d'utilisateur */}  
            {!isMobile ? (  
                <Title level={4} style={{ margin: 0, color: textColor }}>  
                    Bienvenue, {auth.user ? `${auth.user.nom} ${auth.user.prenom}` : 'Utilisateur'}!  
                </Title>  
            ) : (  
                <Space>  
                    <UserOutlined style={{ fontSize: '20px', color: '#fff' }} />  
                    <span style={{ color: textColor, fontSize: '14px' }}>  
                        {auth.user ? auth.user.prenom : 'Utilisateur'}  
                    </span>  
                </Space>  
            )}  

            {/* Bouton de déconnexion */}  
            {isMobile ? (  
                <Button  
                    type="primary"  
                    danger  
                    icon={<LogoutOutlined />}  
                    onClick={handleLogout}  
                    style={{  
                        backgroundColor: 'rgb(121, 23, 23)',  
                        border: 'none',  
                        padding: '8px',  
                        height: 'auto',  
                    }}  
                />  
            ) : (  
                <Button  
                    type="primary"  
                    danger  
                    icon={<LogoutOutlined />}  
                    onClick={handleLogout}  
                    style={{  
                        backgroundColor: 'rgb(121, 23, 23)',  
                        border: 'none',  
                        padding: '8px 20px',  
                        height: 'auto',  
                    }}  
                >  
                    Se Déconnecter  
                </Button>  
            )}  
        </Header>  
    );  
};  

export default HeaderSection;