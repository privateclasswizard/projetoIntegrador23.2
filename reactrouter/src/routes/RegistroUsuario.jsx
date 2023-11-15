import Reacts from "react";
import navalha from '../components/assets/icons/navalha.svg'
import { Link } from "react-router-dom";
import "../components/assets/css/CadastroUser.css";

const RegistroUsuario = () => {
  

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
            <Link to="/login"> 
              <a>LOGIN</a>
            </Link>
            </div>
          </nav>
        </header>
        <body>
          <div className="container">
            <h4>Cadastrar</h4>
            <div className="formLogin">
              <div className="divform">
                <label className="labelform">Nome: </label><br></br>
                <input type="text" placeholder="Seu Nome" />
              </div>
              <div className="divform">
                <label className="labelform">Celular: </label><br></br>
                <input type="text" placeholder="Seu Celular" />
              </div>
              <div className="divform">
                <label className="labelform">Email: </label><br></br>
                <input type="text" placeholder="Seu Email" />
              </div>
              <div className="divform">
                <label className="labelform">Senha: </label><br></br>
                <input type="password" placeholder="Sua Senha" />
              </div>
              <div className="divform">
                <button type="button" className="btncadastrar">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </body>
      </div>
    )
}

export default RegistroUsuario