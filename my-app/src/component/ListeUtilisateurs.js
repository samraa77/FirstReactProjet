// src/components/ListeUtilisateurs.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';
import DetailsUtilisateur from './DetailsUtilisateur';
import ModifierUtilisateur from './ModifierUtilisateur';

const ListeUtilisateurs = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isModifierVisible, setModifierVisible] = useState(false);

    useEffect(() => {
        fetchUtilisateurs();
    }, []);

    const fetchUtilisateurs = async () => {
        try {
            const response = await axios.get('https://6772a68fee76b92dd492f93a.mockapi.io/elh/users');
            setUtilisateurs(response.data); // Assurez-vous que les données contiennent un champ 'nom'
        } catch (error) {
            console.error('Erreur en récupérant les utilisateurs:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://6772a68fee76b92dd492f93a.mockapi.io/elh/users/${id}`);
            fetchUtilisateurs(); // Réactualiser la liste après suppression
        } catch (error) {
            console.error('Erreur en supprimant l’utilisateur:', error);
        }
    };

const handleDetailsClick = (user) => {
    console.log('Détails de l\'utilisateur sélectionné:', user); // Log pour vérifier
    setSelectedUser(user);
    setDetailsVisible(true);
};

const handleModifierClick = (user) => {
    console.log('Modifier l\'utilisateur sélectionné:', user); // Log pour vérifier
    setSelectedUser(user);
    setModifierVisible(true);
};


    const columns = [
        {
            title: 'Nom',
            dataIndex: 'nom', // Assurez-vous que ceci correspond à la clé dans votre API
            key: 'nom',
        },
        {
            title: 'Prénom',
            dataIndex: 'prenom',
            key: 'prenom',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, user) => (
                <>
                    <Button onClick={() => handleDetailsClick(user)}>Détails</Button>
                    <Button onClick={() => handleModifierClick(user)}>Modifier</Button>
                    <Button danger onClick={() => handleDeleteUser(user.id)}>Supprimer</Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <Table dataSource={utilisateurs} columns={columns} rowKey="id" />
            {isDetailsVisible && <DetailsUtilisateur user={selectedUser} onClose={() => setDetailsVisible(false)} />}
            {isModifierVisible && <ModifierUtilisateur user={selectedUser} onClose={() => setModifierVisible(false)} refreshList={fetchUtilisateurs} />}
        </div>
    );
};

export default ListeUtilisateurs;
