import React, { useEffect, useState } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { logout } from '../store/actions';  
import { Outlet } from 'react-router-dom';  
import { Layout as AntLayout, Row, Col } from 'antd';  
import { useMediaQuery } from 'react-responsive';  
import HeaderSection from './HeaderSection';  
import NavBarSection from './NavBarSection';  
import Index from './Index';  
import FooterSection from './FooterSection';  

const { Content } = AntLayout;  

const Layout = () => {  
    const dispatch = useDispatch();  
    const auth = useSelector((state) => state.auth);  
    const user = useSelector((state) => state.user);  
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });  
    const isMobile = useMediaQuery({ maxWidth: 768 });  

    useEffect(() => {  
        const handleMouseMove = (event) => {  
            setMousePosition({ x: event.clientX, y: event.clientY });  
        };  

        window.addEventListener('mousemove', handleMouseMove);  
        return () => {  
            window.removeEventListener('mousemove', handleMouseMove);  
        };  
    }, []);  

    

    const handleLogout = () => {  
        dispatch(logout());  
    };  

    const userColor = auth.user?.couleur || '#cccccc';  

    return (  
        <div style={{ textAlign: 'center' }}>  
            <AntLayout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>  
                <div style={{  
                    flex: 1,  
                    display: 'flex',  
                    flexDirection: 'column',  
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.3), ${userColor})`  
                }}>  
                    <HeaderSection  
                        userColor={userColor}  
                        name={`${user?.prenom || 'Utilisateur'} ${user?.nom || ''}`}  
                        onLogout={handleLogout}  
                    />  
                    <NavBarSection userColor={userColor} />  
                    
                    <Content style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>  
                        <Row style={{ flex: 1 }}>  
                            {/* Index Component - Hidden on Mobile */}  
                            {!isMobile && (  
                                <Col  
                                    xs={0}  
                                    sm={6}  
                                    md={6}  
                                    lg={4}  
                                    style={{  
                                        position: 'fixed',  
                                        top: '130px',  
                                        bottom: 0,  
                                        width: '200px',  
                                        padding: '10px',  
                                    }}  
                                >  
                                    <Index />  
                                </Col>  
                            )}  

                            {/* Main Content */}  
                            <Col  
                                xs={24}  
                                sm={18}  
                                md={18}  
                                lg={20}  
                                style={{  
                                    marginLeft: isMobile ? 0 : '200px',  
                                    padding: '20px',  
                                    minHeight: '100%',  
                                }}  
                            >  
                                <Outlet />  
                            </Col>  
                        </Row>  
                    </Content>  

                    <div style={{ position: 'sticky', bottom: 0, width: '100%', zIndex: 1000 }}>  
                        <FooterSection userColor={userColor}/>  
                    </div>  
                </div>  
            </AntLayout>  
        </div>  
    );  
};  

export default Layout;