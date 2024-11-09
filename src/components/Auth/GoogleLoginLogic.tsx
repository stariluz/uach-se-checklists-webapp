import { GoogleLogin, CredentialResponse, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginLogic = () => {
  const handleLoginSuccess = (response: CredentialResponse) => {

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
  };

  const handleLoginFailure = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId='1008438548380-ubd3odhucqpdecjmr1d3951oq2da2e66.apps.googleusercontent.com'>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginLogic;