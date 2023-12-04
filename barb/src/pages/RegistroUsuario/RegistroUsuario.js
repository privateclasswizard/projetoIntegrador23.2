import Reacts from "react";
import Header from "../../components/assets/js/Header/HeaderLogoOff.js";
import FormRegistroUser from "../../components/assets/js/FormRegistroUser/FormRegisterUser.js";
import "../../components/assets/css/Login.css";

const Login = () => {
  return (
    <div className="containerLogin">
    <Header />
    <div className="section1Login">
      <div className="formLogin">
      <FormRegistroUser />
      </div>
    </div>
    </div>
  
  );
};

export default Login;
