import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const VoirMonProfil = () => {
    const user = useSelector((state) => state.auth.user);

    // Debug log
    console.log('User data:', user);

    // Check if user exists and is properly loaded
    if (!user) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Veuillez vous connecter pour voir votre profil.</div>;
    }

    // Default avatar image
    const defaultAvatar = 'https://via.placeholder.com/120';

    return (
        <div style={{ padding: '20px' }}>
            <Card bordered={false} style={{ textAlign: 'center' }}>
                <Avatar 
                    size={120} 
                    src={user.photo || defaultAvatar}
                    alt="Profile"
                    style={{ marginBottom: 16 }}
                    fallback={defaultAvatar}
                />
                <Title level={2}>
                    {typeof user.prenom === 'string' && typeof user.nom === 'string' 
                        ? `${user.prenom} ${user.nom}`
                        : 'Nom non disponible'}
                </Title>
                <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
                    {typeof user.pseudo === 'string' ? `@${user.pseudo}` : ''}
                </Text>
                
                <Row gutter={[16, 16]} justify="center">
                    <Col span={12}>
                        <Text strong>Email: </Text>
                        <Text>{typeof user.email === 'string' ? user.email : ''}</Text>
                    </Col>
                    <Col span={12}>
                        <Text strong>Âge: </Text>
                        <Text>{typeof user.age === 'number' ? `${user.age} ans` : ''}</Text>
                    </Col>
                    <Col span={12}>
                        <Text strong>Admin: </Text>
                        <Text>{typeof user.admin === 'boolean' ? (user.admin ? 'Oui' : 'Non') : ''}</Text>
                    </Col>
                    <Col span={12}>
                        <Text strong>Pays: </Text>
                        <Text>{typeof user.Pays === 'string' ? user.Pays : ''}</Text>
                    </Col>
                    <Col span={12}>
                        <Text strong>Devise: </Text>
                        <Text>{typeof user.Devise === 'string' ? user.Devise : ''}</Text>
                    </Col>
                    <Col span={12}>
                        <Text strong>Couleur préférée: </Text>
                        {typeof user.couleur === 'string' && (
                            <Text>
                                <span style={{ 
                                    display: 'inline-block', 
                                    width: '20px', 
                                    height: '20px', 
                                    borderRadius: '50%', 
                                    backgroundColor: user.couleur, 
                                    marginRight: '8px',
                                    border: '1px solid #ddd'
                                }} />
                                {user.couleur}
                            </Text>
                        )}
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default VoirMonProfil;
