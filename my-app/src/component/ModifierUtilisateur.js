import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, notification, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ModifierUtilisateur = ({ user, onClose, refreshList }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate(); // Utiliser useNavigate pour rediriger

    useEffect(() => {
        if (user) {
            form.setFieldsValue(user);
        }
    }, [user, form]);

    const handleFinish = async (values) => {
        try {
            await axios.put(`https://6772a68fee76b92dd492f93a.mockapi.io/elh/users/${user.id}`, values);
            notification.success({ message: 'Utilisateur mis à jour avec succès' });
            refreshList(); // Mettre à jour la liste après la mise à jour
            onClose(); // Fermer le modal
            
            // Vérifier si l'utilisateur n'est pas admin et a moins de 15 ans
            if (values.age < 15 && !values.admin) {
                navigate('/modifierCouleur', { state: { user: values } }); // Passer les données utilisateur
            }
        } catch (error) {
            notification.error({ message: 'Erreur lors de la mise à jour de l’utilisateur' });
        }
    };

    return (
        <Modal title="Modifier l'Utilisateur" visible={true} footer={null} onCancel={onClose}>
            <Form form={form} onFinish={handleFinish}>
                {/* Champs de formulaire ici */}
                <Form.Item label="Nom" name="nom" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Prénom" name="prenom" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Pseudo" name="pseudo" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Admin" name="admin" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Mot de Passe" name="MotDePasse" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Couleur Préférée" name="couleur">
                    <Input />
                </Form.Item>
                <Form.Item label="Devise" name="Devise">
                    <Input />
                </Form.Item>
                <Form.Item label="Pays" name="Pays">
                    <Input />
                </Form.Item>
                <Form.Item label="Avatar" name="avatar">
                    <Input />
                </Form.Item>
                <Form.Item label="Photo" name="photo">
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">Mettre à jour</Button>
            </Form>
        </Modal>
    );
};

export default ModifierUtilisateur;
