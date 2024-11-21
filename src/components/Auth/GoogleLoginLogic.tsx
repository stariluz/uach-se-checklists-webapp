import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

type GoogleLoginLogicProps = {
  buttonText: "signin_with" | "signup_with" | "continue_with" | "signin" | undefined;
  onLoginSuccess: (picture: string) => void;
};

const GoogleLoginLogic = ({ buttonText }: GoogleLoginLogicProps) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = async (response: CredentialResponse) => {
    console.log('Login Success:', response);

    const token = response.credential;
    if (!token) {
      console.error('Token is undefined');
      return;
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const userInfo = JSON.parse(jsonPayload);
    const email = userInfo.email;
    const picture = userInfo.picture;
    try {
      const res = await axios.post('/login', {
        email: email,
        google_token: token
      });
      console.log('@dev Respuesta del servidor:', res.data);
      setAuth({
        user: new UserModel(res.data.user),
        token: token
      });
      navigate('/home');
    } catch (error) {
      console.error('Error al enviar los datos al backend:', error);
    }
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        text={buttonText} 
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginLogic;