import { Form, Input, Button, Switch, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

const AjouterUtilisateur = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state);
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    // Status for mouse coordinates

    const isColorBright = (hexColor) => {
        if (!hexColor) return false;
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return brightness > 128;
      };
    const textColor = isColorBright(auth.user.couleur) ? '#000' : '#fff';


    const handleChange = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', payload: { field, value } });
    };

    const handleSubmit = async (values) => {
        console.log("Submitted Data: ", values);
        try {
            // Send data to API
            const response = await axios.post('https://6772a68fee76b92dd492f93a.mockapi.io/elh/users', values);
            console.log('User created: ', response.data);
            navigate('/home/liste-utilisateurs'); // Redirect to login after registration
        } catch (error) {
            console.error('Error submitting data: ', error);
            // You can display an error message to the user here
        }
    };

    const passwordRule = [
        {
            required: true,
            message: 'Veuillez entrer votre mot de passe!',
        },
        {
            validator: (_, value) => {
                if (!value || value.length < 8) {
                    return Promise.reject(new Error('Le mot de passe doit contenir au moins 8 caractères!'));
                }
                if (!/[A-Z]/.test(value)) {
                    return Promise.reject(new Error('Le mot de passe doit contenir au moins une lettre majuscule!'));
                }
                if (!/[a-z]/.test(value)) {
                    return Promise.reject(new Error('Le mot de passe doit contenir au moins une lettre minuscule!'));
                }
                if (!/[0-9]/.test(value)) {
                    return Promise.reject(new Error('Le mot de passe doit contenir au moins un chiffre!'));
                }
                if (!/[!@#$%^&*]/.test(value)) {
                    return Promise.reject(new Error('Le mot de passe doit contenir au moins un symbole!'));
                }
                return Promise.resolve();
            },
        },
    ];

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Form
                onFinish={handleSubmit}
                style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    maxWidth: '800px',
                }}
            >
                <h2 style={{
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: 'black'
                }}>Ajouter Utilisateur</h2>

                <div style={{ flex: '1 1 45%', padding: '10px' }}>
                    <Form.Item label="Nom" name="nom" rules={[{ required: true, message: 'Veuillez entrer votre nom!' }]}>
                        <Input value={formData.nom} onChange={(e) => handleChange('nom', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Prénom" name="prenom" rules={[{ required: true, message: 'Veuillez entrer votre prénom!' }]}>
                        <Input value={formData.prenom} onChange={(e) => handleChange('prenom', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Pseudo" name="pseudo" rules={[{ required: true, message: 'Veuillez entrer votre pseudo!' }]}>
                        <Input value={formData.pseudo} onChange={(e) => handleChange('pseudo', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Veuillez entrer votre email!' }]}>
                        <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Mot de Passe" name="MotDePasse" rules={passwordRule}>
                        <Input.Password value={formData.MotDePasse} onChange={(e) => handleChange('MotDePasse', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Âge" name="age" rules={[{ required: true, message: 'Veuillez entrer votre âge!' }]}>
                        <Input type="number" value={formData.age} onChange={(e) => handleChange('age', e.target.value)} />
                    </Form.Item>
                </div>

                <div style={{ flex: '1 1 45%', padding: '10px' }}>
                    <Form.Item label="Admin" name="admin" valuePropName="checked">
                        <Switch checked={formData.admin} onChange={(checked) => handleChange('admin', checked)} />
                    </Form.Item>

                    <Form.Item label="Couleur" name="couleur" rules={[{ required: true, message: 'Veuillez entrer votre couleur préférée!' }]}>
                        <Input value={formData.couleur} onChange={(e) => handleChange('couleur', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Devise" name="Devise" rules={[{ required: true, message: 'Veuillez sélectionner une devise!' }]}>
                        <Select value={formData.Devise} onChange={(value) => handleChange('Devise', value)}>
                            <Option value="EUR">EUR</Option>
                            <Option value="USD">USD</Option>
                            <Option value="GBP">GBP</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Pays" name="Pays" rules={[{ required: true, message: 'Veuillez entrer votre pays!' }]}>
                        <Input value={formData.Pays} onChange={(e) => handleChange('Pays', e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Avatar" name="avatar" rules={[{ required: true, message: 'Veuillez entrer l\'URL ou importer une image pour votre avatar!' }]}>
                        <Input value={formData.avatar} onChange={(e) => handleChange('avatar', e.target.value)} placeholder="URL de l'avatar" />
                    </Form.Item>

                    <Form.Item label="Photo" name="photo" rules={[{ required: true, message: 'Veuillez entrer l\'URL d\'une image pour votre photo!' }]}>
                        <Input value={formData.photo} onChange={(e) => handleChange('photo', e.target.value)} placeholder="URL de la photo" />
                    </Form.Item>
                </div>

                <Form.Item style={{ width: '100%' }}>
                    <Button type="primary" htmlType="submit" style={{
                        width: '100%', backgroundColor: auth.user.couleur , color :textColor
                    }}>Ajouter</Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default AjouterUtilisateur;
