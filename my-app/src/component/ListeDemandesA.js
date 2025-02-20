import React from 'react';
import { Table, Button, Tag, Space, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateDemandeStatus } from '../store/actions';
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

const ListeDemandes = () => {
    const dispatch = useDispatch();
    const demandes = useSelector((state) => state.auth.demandes);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleStatusChange = (id, status) => {
        dispatch(updateDemandeStatus(id, status));
    };

    const columns = [
        {
            title: 'Titre',
            dataIndex: 'titre',
            key: 'titre',
            responsive: ['md'],
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
            render: (statut) => {
                let color = 'blue'; // 'en attente' par défaut
                if (statut === 'Approuvée') {
                    color = 'green';
                } else if (statut === 'Rejetée') {
                    color = 'red';
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
            render: (text, record) => {
                return (
                    <Space size="middle">
                        {record.statut !== 'Approuvée' && record.statut !== 'Rejetée' ? (
                            <>
                                <Button type="primary" onClick={() => handleStatusChange(record.id, 'Approuvée')}>
                                    Approuver
                                </Button>
                                <Button type="danger" onClick={() => handleStatusChange(record.id, 'Rejetée')}>
                                    Rejeter
                                </Button>
                            </>
                        ) : (
                            <Tag color={record.statut === 'Approuvée' ? 'green' : 'red'}>
                                {record.statut}
                            </Tag>
                        )}
                    </Space>
                );
            },
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
                    {record.statut !== 'Approuvée' && record.statut !== 'Rejetée' && (
                        <Space size="middle" style={{ marginTop: '10px' }}>
                            <Button type="primary" onClick={() => handleStatusChange(record.id, 'Approuvée')}>
                                Approuver
                            </Button>
                            <Button type="danger" onClick={() => handleStatusChange(record.id, 'Rejetée')}>
                                Rejeter
                            </Button>
                        </Space>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Liste des Demandes</Title>
            {demandes && demandes.length === 0 ? (
                <p>Aucune demande n'a été enregistrée.</p>
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

export default ListeDemandes;
