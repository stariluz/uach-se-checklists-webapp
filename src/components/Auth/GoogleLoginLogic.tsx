import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'src/api/axios';
import useAuth from 'src/hooks/useAuth';
import { UserModel } from 'src/models/Users';

type GoogleLoginLogicProps = {
  buttonText: "signin_with" | "signup_with" | "continue_with" | "signin" | undefined;
  onLoginSuccess: (picture: string) => void;
};

const GoogleLoginLogic = ({ buttonText }: GoogleLoginLogicProps) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = async (response: CredentialResponse) => {
    console.log('@dev Login Success:', response);

    const googleToken = response.credential;
    if (!googleToken) {
      console.error('googleToken is undefined');
      return;
    }

    const base64Url = googleToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const userInfo = JSON.parse(jsonPayload);
    const email = userInfo.email;
    const picture = userInfo.picture;
    try {
      const res = await axios.post('/login', {
        email: email,
        google_token: googleToken,
        picture_url: picture,
      });
      console.log('@dev Respuesta del servidor:', res.data);
      setAuth({
        user: new UserModel(res.data.user),
        token: res.data.token
      });
      navigate('/');
    } catch (error) {
      console.error( error);
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