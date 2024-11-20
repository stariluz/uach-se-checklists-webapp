import './MainPage.css';
import Button from 'src/components/Buttons/Button';
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
        <div className="auth-buttons">
          <GoogleLoginLogic buttonText="signin_with" onLoginSuccess={handleLoginSuccess} />
          <GoogleSignupLogic buttonText="signup_with" onSignupSuccess={handleSignupSuccess} />
          <GoogleLogoutComponent />
        </div>
        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
      </div>
    </div>
  );
}

export default MainPage;