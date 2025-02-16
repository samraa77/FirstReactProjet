import React, { useState } from 'react';
import { Form, Input, Button, Typography, notification } from 'antd'; // Importer le message d'Ant Design
import { useDispatch } from 'react-redux'; // Redux
import { useNavigate } from 'react-router-dom';
import { addDemande } from '../store/actions'; // Assurez-vous d'importer l'action adéquate

const { Title } = Typography;

const AjouterDemande = () => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("Form Submitted", values); 

        // Préparer l'objet de la demande
        const nouvelleDemande = {
            id: Date.now(), // Générer un ID unique
            titre: values.titre,
            description: values.description,
            statut: 'En attente', // Statut par défaut
        };

        // Dispatch à Redux
        dispatch(addDemande(nouvelleDemande)); // Fonction d'ajout à Redux

        // Afficher un message de succès
        notification.success({ message: 'Demande ajoutée avec succès !' });

        // Rediriger vers mes demandes après un délai de 1 seconde pour voir le message
        setTimeout(() => {
            navigate("/layout/mes-demandes");
        }, 1000);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Ajouter une Demande</Title>
            <Form onFinish={handleSubmit} layout="vertical">
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
                    <Button type="primary" htmlType="submit">
                        Ajouter Une Demande
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AjouterDemande;
