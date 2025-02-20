import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDemande } from '../store/actions';
import {
    notification,
    Form,
    Input,
    Button,
    Typography,
    Card,
    Space,
} from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

const AjouterDemandes = () => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleSubmit = (e) => {
        if (titre.trim() === '' || description.trim() === '') return;

        const newDemande = {
            id: Date.now(),
            titre,
            description,
            statut: 'En attente',
        };

        dispatch(addDemande(newDemande));
        notification.success({ message: 'Demande ajoutée avec succès !' });
        setTimeout(() => {
            navigate("/home/mes-demandes");
        }, 1000);
        setTitre('');
        setDescription('');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '60vh',
            }}
        >
            <Card
                title={<Title level={2} style={{ fontSize: isMobile ? '1em' : '2em' }}>Ajouter une Demande</Title>}
                style={{
                    width: isMobile ? '90%' : 500, // Adapte la largeur pour mobile
                    borderRadius: 10,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ombre légère
                }}
            >
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Titre"
                        name="titre"
                        rules={[{ required: true, message: 'Veuillez entrer un titre !' }]}
                    >
                        <Input
                            value={titre}
                            onChange={(e) => setTitre(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Veuillez entrer une description !' }]}
                    >
                        <Input.TextArea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'flex-end' }}>
                            <Button type="primary" htmlType="submit">
                                Ajouter
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default AjouterDemandes;
