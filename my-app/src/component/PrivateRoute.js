// src/component/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Private = ({ element, ...rest }) => {
    const user = useSelector(state => state.user); // Vérifiez si l'utilisateur est connecté

    return (
        <Route
            {...rest}
            element={user ? element : <Navigate to="/login" />} // Redirige vers la page de login si non connecté
        />
    );
};

export default Private;
