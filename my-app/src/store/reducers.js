import { SET_USER, UPDATE_FIELD, RESET_FORM, LOGIN_SUCCESS, UPDATE_COLOR ,ADD_DEMANDE , APPROVE_DEMANDE, REJECT_DEMANDE, DELETE_DEMANDE } from './actions';

const initialState = {
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',
    avatar: '',
    photo: '',
    age: '',
    admin: false,
    MotDePasse: '',
    couleur: '',  // Assurez-vous que ceci est cohérent avec vos autres fichiers
    Devise: '',
    Pays: '',
    id: '',
    demandes: [] // Initialiser l'état demandes ici

};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            };
            case ADD_DEMANDE:
            return {
                ...state,
                demandes: [...state.demandes, action.payload],
            };
            case DELETE_DEMANDE:
                return {
                    ...state,
                    demandes: state.demandes.filter(demande => demande.id !== action.payload),
                };
            case APPROVE_DEMANDE:
                return {
                    ...state,
                    demandes: state.demandes.map(demande =>
                        demande.id === action.payload ? { ...demande, statut: 'Approuvé' } : demande
                    ),
                };
            case REJECT_DEMANDE:
                return {
                    ...state,
                    demandes: state.demandes.map(demande =>
                        demande.id === action.payload ? { ...demande, statut: 'Rejeté' } : demande
                    ),
                };
        case UPDATE_COLOR:
            return {
                ...state,
                couleur: action.payload // Correction ici (changement de color à couleur)
            };

        case RESET_FORM:
            return initialState;

        case SET_USER:
            return {
                ...state,
                ...action.payload // Met à jour tous les champs avec les données utilisateur
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload, // Met à jour les données de l'utilisateur après la connexion
            };

        case 'AUTHENTICATE':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export default formReducer;
