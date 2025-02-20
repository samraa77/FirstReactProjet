import axios from 'axios';  

export const login = (pseudo, motDePasse) => {  
    return async (dispatch) => {  
        try {  
            const response = await axios.post('https://6772a68fee76b92dd492f93a.mockapi.io/elh/users', {  
                pseudo,  
                MotDePasse: motDePasse,  
            });  

            if (response.data && response.data.id) {  
                const userData = {  
                    nom: response.data.nom,  
                    prenom: response.data.prenom,  
                    pseudo: response.data.pseudo,  
                    email: response.data.email,  
                    avatar: response.data.avatar,  
                    photo: response.data.photo,  
                    age: response.data.age,  
                    admin: response.data.admin,  
                    couleur: response.data.couleur, // Make sure to include the color.
                    Devise: response.data.Devise,  
                    Pays: response.data.Pays,  
                    id: response.data.id,  
                };  

                localStorage.setItem('user', JSON.stringify(userData));  
                
                dispatch({  
                    type: 'LOGIN_SUCCESS',  
                    payload: { user: userData },  
                });  
            } else {  
                throw new Error('Données utilisateur non disponibles');  
            }  
        } catch (error) {  
            dispatch({  
                type: 'LOGIN_FAILURE',  
                payload: error.response?.data?.message || 'Erreur de connexion',  
            });  
        }  
    };  
};  

export const logout = () => {  
    return (dispatch) => {  
        localStorage.removeItem('user');  
        dispatch({ type: 'LOGOUT' });  
    };  
};
export const changeUserColor = (couleur) => {
    return {
        type: 'CHANGE_USER_COLOR',
        payload: couleur,
    };
};

// Action Creators
export const addDemande = (demande) => {  
    return (dispatch) => {  
        dispatch({  
            type: 'ADD_DEMANDE',  
            payload: demande,  
        });  
        // Enregistrez les demandes dans localStorage après chaque ajout  
        const currentDemandes = JSON.parse(localStorage.getItem('demandes')) || [];  
        currentDemandes.push(demande);  
        localStorage.setItem('demandes', JSON.stringify(currentDemandes));  
    };  
};

export const cancelDemande = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'CANCEL_DEMANDE',
            payload: id,
        });
    };
};

export const updateDemandeStatus = (id, status) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_DEMANDE_STATUS',
            payload: { id, status },
        });
    };
};

export const approveDemande = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'APPROVE_DEMANDE',
            payload: id,
        });
    };
};

export const rejectDemande = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'REJECT_DEMANDE',
            payload: id,
        });
    };
};