<<<<<<< Updated upstream
import './HomePage.css'
import ChecklistsList from 'src/components/Checklists/ChecklistsList/ChecklistsList'
import Button from 'src/components/Buttons/Button'
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus'
=======
import './HomePage.css';
import ChecklistsList from 'src/components/ChecklistsList/ChecklistsList';
import Button from 'src/components/Buttons/Button';
import IconLibraryPlus from 'src/components/Icons/IconLibraryPlus';
>>>>>>> Stashed changes
import useDialog from 'src/hooks/useDialog';
import Dialog from 'src/components/Dialogs/Dialog';
import GoogleLoginLogic from 'src/components/Auth/GoogleLoginLogic';
import GoogleLogoutComponent from 'src/components/Auth/GoogleLogout';
import GoogleSignupLogic from 'src/components/Auth/GoogleSignupLogic';
import { useState } from 'react';

function HomePage() {
  const { showDialog, closeDialog } = useDialog();
  const [profilePicture, setProfilePicture] = useState<string | undefined>(undefined);

  const createChecklist = () => {
    // @todo verify data is right and call create checklist methods
    // @todo check exceptions and show alerts with them
    closeDialog();
  };

  const openDialogCreateChecklist = () => {
    console.log("show dialog");
    showDialog(
      <Dialog
        header={<h2>Titulo del dialog</h2>}
        onConfirm={createChecklist}
        onCancel={closeDialog}
      >
        Este es un dialog
      </Dialog>
    );
  };

  const handleLoginSuccess = (picture: string) => {
    setProfilePicture(picture);
  };

  const handleSignupSuccess = (picture: string) => {
    setProfilePicture(picture);
  };

  return (
    <>
      <div className="container">
        <div className="container-head">
          <Button
            icon={<IconLibraryPlus />}
            iconPos='left'
            onClick={() => openDialogCreateChecklist()}
          >
            Crear nueva checklist
          </Button>
          <div>{/* @todo Select control */}</div>
        </div>
        <ChecklistsList />
        <GoogleLoginLogic buttonText="signin_with" onLoginSuccess={handleLoginSuccess} />
        <GoogleSignupLogic buttonText="signup_with" onSignupSuccess={handleSignupSuccess} />
        <GoogleLogoutComponent />
        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
      </div>
    </>
  );
}

export default HomePage;