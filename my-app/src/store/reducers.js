const initialState = {  
    isAuthenticated: false,  
    user: null,  
    error: null,  
    success: null,  
    demandes: JSON.parse(localStorage.getItem('demandes')) || [], // Charger les demandes depuis localStorage  
};  


const userFromStorage = JSON.parse(localStorage.getItem('user'));  

const authInitialState = {  
    ...initialState,  
    isAuthenticated: userFromStorage ? true : false,  
    user: userFromStorage,  

};  

const authReducer = (state = authInitialState, action) => {  
    let newDemandes;
    switch (action.type) {  
        case 'LOGIN_SUCCESS':  
            return {  
                ...state,  
                isAuthenticated: true,  
                user: action.payload.user,  
                error: null,  
                success: 'Connexion réussie !',  
            };  
        case 'LOGIN_FAILURE':  
            return {  
                ...state,  
                isAuthenticated: false,  
                user: null,  
                error: action.payload,  
            };  
            case 'LOGOUT':  
            localStorage.removeItem('user'); // Gardez les demandes dans localStorage  
            return {  
                ...initialState,  
                demandes: state.demandes, // Conserver les demandes existantes dans l'état  
            };
        case 'CHANGE_USER_COLOR':
            return {
              ...state,
                  user: {
                       ...state.user,
                       couleur: action.payload,
                     },
            }; 
            case 'ADD_DEMANDE':
                newDemandes = [...state.demandes, action.payload];
                localStorage.setItem('demandes', JSON.stringify(newDemandes)); // Sauvegarder dans localStorage
                return {
                    ...state,
                    demandes: newDemandes,
                };
            case 'CANCEL_DEMANDE':  
                // Filtrer pour obtenir une nouvelle liste de demandes sans celle qui a été annulée  
                newDemandes = state.demandes.filter(demande => demande.id !== action.payload);  
                localStorage.setItem('demandes', JSON.stringify(newDemandes)); // Sauvegarder dans localStorage  
                return {  
                    ...state,  
                    demandes: newDemandes,  
                };
                case 'UPDATE_DEMANDE_STATUS':
                    newDemandes = state.demandes.map(demande =>
                        demande.id === action.payload.id ? { ...demande, statut: action.payload.status } : demande
                    );
                    localStorage.setItem('demandes', JSON.stringify(newDemandes)); // Sauvegarder dans localStorage
                    return {
                        ...state,
                        demandes: newDemandes,
                    };
                case 'APPROVE_DEMANDE':
                    newDemandes = state.demandes.map(demande =>
                        demande.id === action.payload ? { ...demande, statut: 'Approuvée' } : demande
                    );
                    localStorage.setItem('demandes', JSON.stringify(newDemandes)); // Sauvegarder dans localStorage
                    return {
                        ...state,
                        demandes: newDemandes,
                    };
                case 'REJECT_DEMANDE':
                    newDemandes = state.demandes.map(demande =>
                        demande.id === action.payload ? { ...demande, statut: 'Rejetée' } : demande
                    );
                    localStorage.setItem('demandes', JSON.stringify(newDemandes)); // Sauvegarder dans localStorage
                    return {
                        ...state,
                        demandes: newDemandes,
                    };
        default:  
            return state;  
    }  
};  

export default authReducer;