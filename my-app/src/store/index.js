import { combineReducers } from 'redux';  
import authReducer from './reducer'; // Assurez-vous que le chemin est correct  

const rootReducer = combineReducers({  
    auth: authReducer, // Assurez-vous que l'authentification est correctement intégrée  
});  

export default rootReducer;