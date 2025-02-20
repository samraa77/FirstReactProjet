import React from 'react';  
import { Result, Button, Typography } from 'antd';  
import { useMediaQuery } from 'react-responsive';  
import { useNavigate } from 'react-router-dom';  

const { Title, Paragraph, Text } = Typography;  

const Error = () => {  
    const isMobile = useMediaQuery({ maxWidth: 768 });  
    const navigate = useNavigate();  

    return (  
        <div style={{  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
            minHeight: '100vh',  
            backgroundColor: '#f0f2f5' // Fond gris clair pour correspondre à Ant Design  
        }}>  
            <Result  
                status="403"  
                title={<Title level={3} style={{ fontSize: isMobile ? '20px' : '24px' }}>Erreur 403 - Accès Interdit</Title>} // Ajustez pour mobile  
                subTitle={  
                    <>  
                        <Paragraph>  
                            <Text>Désolé, vous n'avez pas les permissions nécessaires pour accéder à cette page.</Text>  
                        </Paragraph>  
                        <Paragraph>  
                            Veuillez vous connecter pour continuer.  
                        </Paragraph>  
                        <Paragraph>  
                            Si vous n'avez pas de compte, <a href="/login">inscrivez-vous ici</a>.  
                        </Paragraph>  
                    </>  
                }  
                extra={[  
                    <Button type="primary" key="login" onClick={() => navigate('/login')}>  
                        Se connecter  
                    </Button>,  
                    <Button key="home" onClick={() => navigate('/')}>  
                        Retourner à l'accueil  
                    </Button>,  
                ]}  
            />  
        </div>  
    );  
};  

export default Error;