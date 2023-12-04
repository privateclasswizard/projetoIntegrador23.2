import Reacts from "react";
import navalha from "../../components/assets/icons/navalha.svg"
import "../../components/assets/css/Login.css";
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="divnavbarlogo">
            <Link to="/">
              <img src={navalha} className="imgnavbar" alt="logo" />
            </Link>
          </div>
          <div className="divnavbar">
            <a>LOGIN</a>
          </div>
        </nav>
      </header>
      <body>
        <div class="container">
          <div class="formLogin">
            <div class="email">
              <label class="labelemail">Email</label>
              <br />
              <input type="text" placeholder="Seu Email" />
            </div>
            <div class="senha">
              <label class="labelsenha">Senha</label>
              <br />
              <input type="password" placeholder="Sua Senha" />
            </div>
            <Link to='/inicial'>
            <button id="loginUser" >Entrar</button>
            </Link>
            <br />
            <div class="pacesso">
              <Link to="/registrosusuario">
              <a>Primeiro acesso</a>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
