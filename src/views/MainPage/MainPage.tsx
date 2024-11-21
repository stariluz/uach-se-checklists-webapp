import './MainPage.css';
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic';
import GoogleLogoutComponent from 'src/components/Auth/GoogleLogout';
import GoogleSignupLogic from 'src/components/Auth/GoogleSignupLogic';
import { useState } from 'react';

function MainPage() {
  const [profilePicture, setProfilePicture] = useState<string | undefined>(undefined);

  const handleLoginSuccess = (picture: string) => {
    setProfilePicture(picture);
  };

  const handleSignupSuccess = (picture: string) => {
    setProfilePicture(picture);
  };

  return (
    <div className="main-container">
      <div className="header">
        <div className="title">¡Sé un Checkmylist!</div> {/* Título agregado */}
        <div className="subtitle">
          Tus pendientes, proyectos, tareas, listas de compras, quehaceres y más en un sitio, de forma sencilla, y colaborativa.
        </div>
        <div className='crea'>¡Crea tú cuenta!</div>
        <div className='cuenta'>¿Ya tienes una cuenta?</div>
        <div className="auth-buttons">
          <GoogleSignupLogic buttonText="signup_with" onSignupSuccess={handleSignupSuccess} />
          <GoogleLoginLogic buttonText="signin_with" onLoginSuccess={handleLoginSuccess} />
          <GoogleLogoutComponent />
        </div>
        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
      </div>
      <div className="task-message">
        ¡Crea tus listas de tareas y compártelas con quien tú quieras!
      </div>
    </div>
  );
}

export default MainPage;  