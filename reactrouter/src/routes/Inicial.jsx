import navalha from "../components/assets/icons/navalha.png";
import bell from "../components/assets/icons/sino.svg"
import iconuser from "../components/assets/icons/iconuser.svg"
import "../components/assets/css/Login.css";
import "../components/assets/css/inicial.css"
import { Link } from "react-router-dom";


const Inicial = () => {
    return (
<>
      <header>
        <nav className="navbar">
          <img src={navalha} alt="logo" id="png" />
          
          <section id="botao">
            <button type="button" id="bcad">
              <p id="cadletra">Cadastro</p>
            </button>
            <button type="button" id="brel">
              <p id="relletra">Relatório</p>
            </button>
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
            <button type="button" className="bcad-inferior">
              Cadastrar Horário
            </button>
          </div>

          </table>


        </div>
      </body>
    </>
    )
}

export default Inicial