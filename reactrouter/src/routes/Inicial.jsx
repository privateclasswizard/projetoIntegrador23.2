import navalha from "../components/assets/icons/navalha.png";
import bell from "../components/assets/icons/sino.svg"
import iconuser from "../components/assets/icons/iconuser.svg"
import "../components/assets/css/inicial.css"
import { Link } from "react-router-dom";


const Inicial = () => {
    return (
<>
      <header>
        <nav className="navbar">
          <Link to="/inicial"> 
          <img src={navalha} alt="logo" id="png" />     
            </Link>
          <section id="botao">
          <Link to="/registrarhorario">
            <button type="button" id="bcad">
              <p id="cadletra">Cadastro</p>
            </button>
            </Link>
            <Link to="/registroBarbeiro">
            <button type="button" id="brel">
              <p id="relletra">Relatório</p>
            </button>
            </Link>
          </section>

          <div className="cantodireito">
          <img src={bell} alt="sino" id="sino" />
          <img src={iconuser} alt="iconuser" id="iconuser" />
          </div>
        </nav>
      </header>
      <body>
        <div className="containerinicial">
          <table>
            <thead>
              <tr className="legends">
                <th>Horário</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Celular</th>
                <th>Barbeiro</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody></tbody>
            
            <div className="botao-cadastro">
              <Link to="/registrarhorario">
            <button type="button" className="bcad-inferior">
              Cadastrar Horário
            </button>
              </Link>
          </div>

          </table>


        </div>
      </body>
    </>
    )
}

export default Inicial