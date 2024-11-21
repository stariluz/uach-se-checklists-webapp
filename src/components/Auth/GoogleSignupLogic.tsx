import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'src/api/axios';
import useAuth from 'src/hooks/useAuth';
import { UserModel } from 'src/models/Users';


type GoogleSignupLogicProps = {
  buttonText: "signin_with" | "signup_with" | "continue_with" | "signin" | undefined;
  onSignupSuccess: (picture: string) => void;
};

const GoogleSignupLogic = ({ buttonText }: GoogleSignupLogicProps) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  
  const handleSignupSuccess = async (response: CredentialResponse) => {
    console.log('Signup Success:', response);

    const token = response.credential;
    if (!token) {
      console.error('Token is undefined');
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const userInfo = JSON.parse(jsonPayload);
    const email = userInfo.email;
    const picture = userInfo.picture;

    try {
      const res = await axios.post('/signup', {
        email: email,
        google_token: token,
        picture_url: picture
      });
      setAuth({
        user: new UserModel(res.data.user),
        token: token
      });
      navigate('/home');
      console.log('@dev Respuesta del servidor:', res.data);
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