import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { changeUserColor } from '../store/actions';
import { Button, notification, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ModifierCouleur = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(() => {
        // Initialize from localStorage, if available
        const storedColor = localStorage.getItem('themeColor');
        return storedColor || '#ffffff';
    });
    const navigate = useNavigate();

    // useEffect to apply color from localStorage and update Redux
    useEffect(() => {
        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
        }

        // Update Redux store if user color is different from local storage
        if (user && user.couleur && user.couleur !== savedColor) {
            dispatch(changeUserColor(savedColor));
        }
    }, [user]);

    const handleColorChange = (couleur) => {
        setSelectedColor(couleur);
    };

    const handleChangeColorClick = () => {
        setShowColorPicker(true);
    };

    const handleValidateSubmit = () => {
        Modal.confirm({
            title: "Confirmation",
            content: "Êtes-vous sûr de vouloir changer la couleur ?",
            okText: "Oui",
            cancelText: "Non",
            onOk: async () => {
                try {
                    // Mettre à jour la couleur dans l'API
                    await axios.put(`https://6772a68fee76b92dd492f93a.mockapi.io/elh/users/${user.id}`, {
                        couleur: selectedColor,
                    });

                    // Stocker la couleur dans le localStorage
                    localStorage.setItem('themeColor', selectedColor);

                    // Appliquer la couleur à tout le document
                    document.body.style.backgroundColor = selectedColor;

                    // Mettre à jour la couleur dans le store Redux
                    dispatch(changeUserColor(selectedColor));

                    notification.success({
                        message: 'Succès',
                        description: 'La couleur a été mise à jour avec succès !',
                    });

                    // Réinitialiser l'affichage
                    setShowColorPicker(false);
                } catch (error) {
                    notification.error({
                        message: 'Erreur',
                        description: error.response ? error.response.data.message || 'Impossible de mettre à jour la couleur.' : error.message,
                    });
                }
            },
        });
    };

    if (user && user.age < 15 && !user.admin) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Modifier la Couleur</h1>
                <p>Vous n'êtes pas autorisé à modifier la couleur car vous avez moins de 15 ans.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Modifier la Couleur</h1>
            <p>Couleur actuelle : <strong style={{ color: selectedColor }}>{selectedColor}</strong></p>
            {!showColorPicker ? (
                <Button type="primary" onClick={handleChangeColorClick}>
                    Changer
                </Button>
            ) : (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <HexColorPicker
                            color={selectedColor}
                            onChange={handleColorChange}
                        />
                        <div style={{ marginTop: '20px' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: selectedColor,
                                borderRadius: '50%',
                            }} />
                        </div>
                    </div>
                    <Button type="primary" onClick={handleValidateSubmit} style={{ marginTop: '20px' }}>
                        Valider
                    </Button>
                </>
            )}
        </div>
    );
};

export default ModifierCouleur;
