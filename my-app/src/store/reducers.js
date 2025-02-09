// src/redux/reducers.js

import { SET_USER, UPDATE_FIELD, RESET_FORM, LOGIN_SUCCESS } from './actions';

const initialState = {
    nom: '',
    age: '',
    admin: false,
    MotDePasse: '',
    pseudo: '',
    prenom: '',
    couleur: '',
    Devise: '',
    Pays: '',
    avatar: '',
    email: '',
    photo: '',
    id: ''
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
        case RESET_FORM:
            return initialState;
        case SET_USER:
            return {
                ...state,
                ...action.payload // Mettre à jour tous les champs avec les données utilisateur
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload, // Met à jour l'utilisateur dans le state
            };
        default:
            return state;
    }
};

export default formReducer;
