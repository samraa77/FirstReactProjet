import React from 'react';
import { Table, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { approveDemande, rejectDemande } from '../store/actions'; // Assurez-vous d'importer les actions nécessaires

const ListDemandesA = () => {
    const demandes = useSelector((state) => state.demandes);
    const dispatch = useDispatch();

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
                        type="primary"
                        onClick={() => dispatch(approveDemande(record.id))} // Action pour approuver
                    >
                        Approuver
                    </Button>
                    <Button
                        type="danger"
                        onClick={() => dispatch(rejectDemande(record.id))} // Action pour rejeter
                    >
                        Rejeter
                    </Button>
                </span>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h2>Liste des Demandes (Admin)</h2>
            <Table dataSource={demandes} columns={columns} rowKey="id" />
        </div>
    );
};

export default ListDemandesA;
