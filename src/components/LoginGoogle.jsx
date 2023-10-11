import { GoogleLogin } from "@react-oauth/google";

function LoginGoogle() {
  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  }

  const handleError = () => {
    console.log("Login Failed");
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      size="large"
      width='290px'
    />
  );
}

export default LoginGoogle;
