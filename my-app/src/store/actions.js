// Déclaration des types d'actions
export const AUTHENTICATE = 'AUTHENTICATE';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const RESET_FORM = 'RESET_FORM';
export const SET_USER = 'SET_USER';
export const UPDATE_COLOR = 'UPDATE_COLOR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// actions.js
export const ADD_DEMANDE = 'ADD_DEMANDE';
// actions.js

export const APPROVE_DEMANDE = 'APPROVE_DEMANDE';
export const REJECT_DEMANDE = 'REJECT_DEMANDE';
// actions.js
export const DELETE_DEMANDE = 'DELETE_DEMANDE';

export const deleteDemande = (id) => ({
    type: DELETE_DEMANDE,
    payload: id,
});


export const approveDemande = (id) => ({
    type: APPROVE_DEMANDE,
    payload: id,
});

export const rejectDemande = (id) => ({
    type: REJECT_DEMANDE,
    payload: id,
});

export const addDemande = (demande) => ({
    type: ADD_DEMANDE,
    payload: demande,
});


// Action pour l'authentification
export const authenticate = (userData) => ({
    type: AUTHENTICATE,
    payload: userData
});

// Action pour définir un utilisateur
export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

// Action pour mettre à jour un champ spécifique du formulaire
export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    payload: { field, value }
});

// Action pour réinitialiser le formulaire
export const resetForm = () => ({
    type: RESET_FORM
});

// Action pour la connexion réussie
export const loginUser = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData // Les données de l'utilisateur fournies au moment de la connexion
});

// Action pour mettre à jour la couleur
export const updateColor = (newColor) => ({
    type: UPDATE_COLOR,
    payload: newColor
});
