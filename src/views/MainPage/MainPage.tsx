
import imagePath from '../../assets/storyset_hero_01.svg';
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic';
import GoogleSignupLogic from 'src/components/Auth/GoogleSignupLogic';
import styles from './MainPage.module.css';

function MainPage() {
  const handleLoginSuccess = () => {
    // setProfilePicture(picture);
  };

  const handleSignupSuccess = () => {
    // setProfilePicture(picture);
  };

  return (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["header"]}`}>
        <div className={`${styles["title"]}`}>¡Sé un Checkmylist!</div>
        <div className={`${styles["subtitle"]}`}>
          Tus pendientes, proyectos, tareas, listas de compras, quehaceres y más en un sitio, de forma sencilla, y colaborativa.
        </div>
        <div className={`${styles["image-container"]}`}>
          <img src={imagePath} alt="Checklist image" />
        </div>
        <div className={`${styles["task-message"]}`}>
          ¡Crea tus listas de tareas y compártelas con quien tú quieras!
        </div>
      </div>
      <div className={`${styles["right-column"]}`}>
        <div className={`${styles["crea"]}`}>¡Crea tú cuenta!</div>
        <div className={`${styles["auth-buttons"]}`}>
          <GoogleSignupLogic buttonText="signup_with" onSignupSuccess={handleSignupSuccess} />
        </div>
        <div className={`${styles["cuenta"]}`}>¿Ya tienes una cuenta?</div>
        <div className={`${styles["auth-buttons"]}`}>
          <GoogleLoginLogic buttonText="signin_with" onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;  