import React from 'react';
import { Modal, Button } from 'antd'; // Assurez-vous d'importer Button ici

const DetailsUtilisateur = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <Modal
            title="Détails de l'Utilisateur" // Titre pour le modal
            open={true} // Ouvre le modal
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Annuler
                </Button>
            ]}
            closeIcon={null} // Supprime le 'X' en fermant (ajout de cette ligne)
            onCancel={onClose} // Ferme le modal lorsque l'utilisateur clique à l'extérieur
        >
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nom:</strong> {user.nom}</p>
            <p><strong>Prénom:</strong> {user.prenom}</p>
            <p><strong>Pseudo:</strong> {user.pseudo}</p>
            <p><strong>Âge:</strong> {user.age}</p>
            <p><strong>Admin:</strong> {user.admin ? "Oui" : "Non"}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mot de Passe:</strong> {user.MotDePasse}</p>
            <p><strong>Couleur Préférée:</strong> {user.couleur}</p>
            <p><strong>Devise:</strong> {user.Devise}</p>
            <p><strong>Pays:</strong> {user.Pays}</p>
            <p><strong>Avatar:</strong> <img src={user.avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} /></p>
            <p><strong>Photo:</strong> <img src={user.photo} alt="Photo" style={{ width: '100px', height: '100px' }} /></p>
        </Modal>
    );
};

export default DetailsUtilisateur;
