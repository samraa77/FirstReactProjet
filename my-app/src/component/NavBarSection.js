import React from 'react';  
import { Menu } from 'antd';  
import { Link } from 'react-router-dom';  
import { useSelector } from 'react-redux'; // Importer useSelector  

const NavBarSection = ({ userColor }) => {  
  const user = useSelector((state) => state.auth.user); // Récupérer l'utilisateur depuis le store Redux  
  
  const isAdmin = user && user.admin; // Vérifier si l'utilisateur est admin  

  // Détermine si la couleur est claire ou foncée pour ajuster la couleur du texte  
  const isColorBright = (hexColor) => {  
    if (!hexColor) return false;  
    const hex = hexColor.replace('#', '');  
    const r = parseInt(hex.substring(0, 2), 16);  
    const g = parseInt(hex.substring(2, 4), 16);  
    const b = parseInt(hex.substring(4, 6), 16);  
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;  
    return brightness > 128;  
  };  

  const textColor = isColorBright(userColor) ? '#000' : '#fff';  

  return (  
    <nav style={{ padding: '10px' }}>  
      <Menu  
        mode="horizontal"  
        theme={userColor}  
        style={{  
          backgroundColor: userColor,  
          border: 'none',  
        }}  
      >  
        <Menu.Item key="1">  
          <Link to="/home" style={{ color: textColor }}>  
            Accueil  
          </Link>  
        </Menu.Item>  
        <Menu.Item key="2">  
          <Link to="/home/voir-mon-profile" style={{ color: textColor }}>  
            Voir Mon Profil  
          </Link>  
        </Menu.Item>  
        <Menu.Item key="3">  
          <Link to="/home/modifier-couleur" style={{ color: textColor }}>  
            Modifier Couleur  
          </Link>  
        </Menu.Item>  

        {/* Afficher les éléments de menu spécifiques à l'admin */}  
        {isAdmin && (  
          <>  
            <Menu.Item key="4">  
              <Link to="/home/liste-utilisateurs" style={{ color: textColor }}>  
                Liste Utilisateurs  
              </Link>  
            </Menu.Item>  
            <Menu.Item key="5">  
              <Link to="/home/ajouter-utilisateur" style={{ color: textColor }}>  
                Ajouter Utilisateur  
              </Link>  
            </Menu.Item>  
            <Menu.Item key="8">  
              <Link to="/home/demandes-admin" style={{ color: textColor }}>  
                Liste de Demandes Admin  
              </Link>  
            </Menu.Item>  
          </>  
        )}  

        {/* Éléments de menu pour tous les utilisateurs */}  
        {!isAdmin && (  
          <>  
            <Menu.Item key="6">  
              <Link to="/home/ajouter-demande" style={{ color: textColor }}>  
                Ajouter Demande  
              </Link>  
            </Menu.Item>  
            <Menu.Item key="7">  
              <Link to="/home/mes-demandes" style={{ color: textColor }}>  
                Mes Demandes  
              </Link>  
            </Menu.Item>  
          </>  
        )}  
      </Menu>  
    </nav>  
  );  
};  

export default NavBarSection;