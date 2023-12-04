import Reacts from "react";
import Header from "../../components/assets/js/Header/HeaderLogoOff.js";
import FormLogin from "../../components/assets/js/FormLogin/FormLogin.js";

import "../../components/assets/css/Login.css";

const Login = () => {
  return (
    <div className="containerLogin">
    <Header />
    <div className="section1Login">
      <div className="formLogin">
      <FormLogin />
      </div>
    </div>
    </div>
  
  );
};

export default Login;
