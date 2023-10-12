import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";


function LoginGoogle() {
  const handleSuccess = (res) => {
    const googleUser = jwtDecode(res.credential)
    const newData = {
      id : googleUser.iat,
      avatar : googleUser.picture,
      firstname : googleUser.given_name,
      lastName : googleUser.family_name,
      email : googleUser.email,
      password : googleUser.jti,
      isAdmin : false
    }
    localStorage.setItem("token", res.credential)
    localStorage.setItem("userInfor", JSON.stringify(newData))
    window.location.reload();
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
