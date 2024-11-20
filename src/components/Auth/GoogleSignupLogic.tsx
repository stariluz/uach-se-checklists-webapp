import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

type GoogleSignupLogicProps = {
  buttonText: "signin_with" | "signup_with" | "continue_with" | "signin" | undefined;
  onSignupSuccess: (picture: string) => void;
};

const GoogleSignupLogic = ({ buttonText }: GoogleSignupLogicProps) => {
  const handleSignupSuccess = async (response: CredentialResponse) => {
    console.log('Signup Success:', response);

    const token = response.credential;
    if (!token) {
      console.error('Token is undefined');
      return;
    }
    console.log('Token:', token);

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const userInfo = JSON.parse(jsonPayload);
    console.log('User Info:', userInfo);

    const email = userInfo.email;
    const picture = userInfo.picture;
    console.log('Email:', email);
    console.log('Picture URL:', picture);

    try {
      const res = await axios.post('http://localhost:3000/users', {
        email: email,
        google_token: token
      });
      console.log('Respuesta del servidor:', res.data);
    } catch (error) {
      console.error('Error al enviar los datos al backend:', error);
    }
  };

  const handleSignupFailure = () => {
    console.log('Signup Failed');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <GoogleLogin
        onSuccess={handleSignupSuccess}
        onError={handleSignupFailure}
        text={buttonText}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignupLogic;