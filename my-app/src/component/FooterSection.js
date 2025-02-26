import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const FooterSection = ({ userColor }) => {
    return (
        <Footer style={{
            backgroundColor: userColor,
            padding: '20px',
            textAlign: 'center'
        }}>
            <Row justify="space-between" align="middle">
                <Col span={12}>
                    <Text>Adresse : 123 Rue Exemple, Ville, Pays</Text>
                </Col>
                <Col span={12}>
                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                            <FacebookOutlined style={{ fontSize: '20px' }} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                            <InstagramOutlined style={{ fontSize: '20px' }} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                            <TwitterOutlined style={{ fontSize: '20px' }} />
                        </a>
                        {/* Ajoute d'autres icônes de réseaux sociaux si nécessaire */}
                    </div>
                </Col>
            </Row>
            <Text>
                Pied de page contenu ici © {new Date().getFullYear()}
            </Text>
        </Footer>
    );
};

export default FooterSection;
