import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const FooterSection = ({ userColor }) => {
    return (
        <Footer style={{
            backgroundColor: userColor,
            padding: '5px 0',
            textAlign: 'center',
        }}>
            <Row justify="center">
                <Col>
                    <Text>Adresse : 123 Rue HAY SALAM, SALE, MAROC</Text>
                </Col>
            </Row>
            <Row justify="center" style={{ margin: '2px 0' }}>
                <Col>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                        <FacebookOutlined style={{ fontSize: '24px', color: 'rgb(121, 23, 23)' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                        <InstagramOutlined style={{ fontSize: '24px' , color: 'rgb(121, 23, 23)' }} />
                    </a>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Text>Pied de page contenu ici © {new Date().getFullYear()}</Text>
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterSection;
