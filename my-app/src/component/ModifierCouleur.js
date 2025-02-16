import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notification, Button, Modal } from 'antd';
import { HexColorPicker } from 'react-colorful';
import { updateColor } from '../store/actions';
import axios from 'axios';

const ModifierCouleur = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    // Charger la couleur depuis localStorage à l'initialisation
    useEffect(() => {
        const savedColor = localStorage.getItem('themeColor');
        if (savedColor) {
            setSelectedColor(savedColor); // Définit l'initialisation
            document.body.style.backgroundColor = savedColor; // Appliquer la couleur de fond
        }
    }, []);

    const handleColorChange = (color) => {
        setSelectedColor(color);
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
                    dispatch(updateColor(selectedColor));

                    notification.success({
                        message: 'Succès',
                        description: 'La couleur a été mise à jour avec succès !',
                    });
                } catch (error) {
                    notification.error({
                        message: 'Erreur',
                        description: error.response ? error.response.data.message || 'Impossible de mettre à jour la couleur.' : error.message,
                    });
                }
            },
        });
    };

    // Vérification de l'âge et des droits de l'utilisateur
    if (user.age < 15 && !user.admin) {
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
