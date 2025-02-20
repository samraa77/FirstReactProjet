import React from 'react';  
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import { useSelector } from 'react-redux';  
import RegistrationForm from './component/RegistrationForm';   
import Auth from './component/Auth';   
import Layout from './component/Home';  
import Accueil from './component/Accueil';  
import VoirMonProfile from './component/VoirMonProfile';  
import ModifierCouleur from './component/ModifierCouleur';  
import ListeUtilisateurs from './component/ListeUtilisateurs';  
import AjouterUtilisateur from './component/AjouterUtilisateur';  
import AjouterDemande from './component/AjouterDemande';  
import MesDemandes from './component/MesDemandes';  
import ListDemandesA from './component/ListeDemandesA';  
import Error from './component/Error';  

const ProtectedRoute = ({ element, isAuthenticated }) => {  
    return isAuthenticated ? element : <Navigate to="/login" />;  
};  

const App = () => {  
    const auth = useSelector((state) => state.auth);  


    return (  
        <Router>  
            <Routes>  
                <Route path="/" element={<RegistrationForm />} />  
                <Route path="/login" element={<Auth />} />  
                <Route path="/home" element={<ProtectedRoute element={<Layout />} isAuthenticated={auth.isAuthenticated} />}>  
                    <Route index element={<Accueil />} />  
                    <Route path="voir-mon-profile" element={<VoirMonProfile />} />  
                    <Route path="modifier-couleur" element={<ModifierCouleur />} />  
                    <Route path="liste-utilisateurs" element={<ListeUtilisateurs />} />  
                    <Route path="ajouter-utilisateur" element={<AjouterUtilisateur />} />  
                    <Route path="ajouter-demande" element={<AjouterDemande />} />  
                    <Route path="mes-demandes" element={<MesDemandes />} />  
                    <Route path="demandes-admin" element={<ListDemandesA />} />   
                    <Route path="*" element={<Error />} />
                </Route>  
            </Routes> 
               
        </Router>  
    );  
};  

export default App;