// src/component/VoirMonProfile.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const VoirMonProfile = () => {
    const user = useSelector((state) => state);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Détails de Mon Profil</h1>
            {user ? (
                <Card style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Nom:</strong> {user.nom}</p>
                    <p><strong>Prénom:</strong> {user.prenom}</p>
                    <p><strong>Pseudo:</strong> {user.pseudo}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Âge:</strong> {user.age}</p>
                    <p><strong>Pays:</strong> {user.Pays}</p>
                    <p><strong>Devise:</strong> {user.Devise}</p>
                    <p><strong>Couleur Préférée:</strong> {user.couleur}</p>
                    <p>
                        <strong>Avatar:</strong>
                        {user.avatar ? <img src={user.avatar} alt="Avatar" style={{ width: 50, height: 50 }} /> : "Aucun Avatar"}
                    </p>
                    <p>
                        <strong>Photo:</strong>
                        {user.photo ? <img src={user.photo} alt="Photo" style={{ width: 100, height: 100 }} /> : "Aucune Photo"}
                    </p>
                    <p><strong>Admin:</strong> {user.admin ? "Oui" : "Non"}</p>
                </Card>
            ) : (
                <p>Aucun utilisateur connecté.</p>
            )}
        </div>
    );
};

export default VoirMonProfile;
