import React from 'react';
import { googleLogout } from '@react-oauth/google';

const GoogleLogoutComponent = () => {
  const handleLogout = () => {
    googleLogout();
    console.log('User logged out');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default GoogleLogoutComponent;