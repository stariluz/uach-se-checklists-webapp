import React from 'react';

const GoogleLogoutComponent = () => {
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default GoogleLogoutComponent;