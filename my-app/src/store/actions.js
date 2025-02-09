// src/redux/actions.js

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const RESET_FORM = 'RESET_FORM';
export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    payload: { field, value }
});

export const resetForm = () => ({
    type: RESET_FORM
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginUser = (userData) => ({
    type: LOGIN_SUCCESS,
    payload: userData, // Les données de l'utilisateur fournies au moment de la connexion
});
export const updateColor = (newColor) => ({
    type: 'UPDATE_COLOR',
    payload: newColor,
});