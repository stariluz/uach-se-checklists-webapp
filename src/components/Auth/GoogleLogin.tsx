import { GoogleOAuthProvider } from "@react-oauth/google";
<GoogleOAuthProvider clientId="">...</GoogleOAuthProvider>;

import { GoogleLogin } from '@react-oauth/google';

<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

export default GoogleLogin;