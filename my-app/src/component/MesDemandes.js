import React from 'react';
import { Table, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDemande } from '../store/actions'; // Assurez-vous d'importer l'action pour supprimer la demande

const { Title } = Typography;

const MesDemandes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const demandes = useSelector((state) => state.demandes);

    const columns = [
        {
            title: 'Titre',
            dataIndex: 'titre',
            key: 'titre',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Statut',
            dataIndex: 'statut',
            key: 'statut',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <span>
                    <Button
                        type="link"
                        onClick={() => navigate(`/layout/modifier-demande/${record.id}`)}
                    >
                        Modifier
                    </Button>
                    <Button
                        type="link"
                        danger
                        onClick={() => dispatch(deleteDemande(record.id))} // Action pour supprimer
                    >
                        Annuler
                    </Button>
                </span>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Mes Demandes</Title>
            <Table dataSource={demandes} columns={columns} rowKey="id" />
        </div>
    );
};

export default MesDemandes;
