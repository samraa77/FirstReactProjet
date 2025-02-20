import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelDemande } from '../store/actions';
import { Table, Button, Tag, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

const MesDemandes = () => {
    const dispatch = useDispatch();
    const demandes = useSelector((state) => state.auth.demandes);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleAnnuler = (id) => {
        dispatch(cancelDemande(id));
    };

    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Statut',
            dataIndex: 'statut',
            key: 'statut',
            render: (statut) => {
                let color = 'blue'; // 'en attente' par défaut
                if (statut === 'Approuvée') {
                    color = 'green';
                } else if (statut === 'Rejetée') {
                    color = 'red';
                } else if (statut === 'Annulée') {
                    color = 'gray';
                }
                return (
                    <Tag color={color}>
                        {statut}
                    </Tag>
                );
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                record.statut === 'En attente' ? (
                    <Button type="danger" onClick={() => handleAnnuler(record.id)}>
                        Annuler
                    </Button>
                ) : null
            ),
        },
    ];

    const mobileColumns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => (
                <div>
                    <Typography.Text strong>Description:</Typography.Text>
                    <div>{text}</div>
                    <Typography.Text strong>Statut:</Typography.Text>
                    <Tag color={record.statut === 'Approuvée' ? 'green' : record.statut === 'Rejetée' ? 'red' : 'blue'}>
                        {record.statut}
                    </Tag>
                    {record.statut === 'En attente' && (
                        <Button type="danger" onClick={() => handleAnnuler(record.id)}>
                            Annuler
                        </Button>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Mes Demandes</Title>
            {demandes && demandes.length === 0 ? (
                <p>Aucune demande enregistrée.</p>
            ) : (
                <Table
                    columns={isMobile ? mobileColumns : columns}
                    dataSource={demandes}
                    rowKey="id"
                />
            )}
        </div>
    );
};

export default MesDemandes;
