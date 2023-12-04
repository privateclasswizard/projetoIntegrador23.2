import navalha from "../../components/assets/icons/navalha.png";
import bell from "../../components/assets/icons/sino.svg";
import iconuser from "../../components/assets/icons/iconuser.svg";
import "../../components/assets/css/inicial.css";
import Header from "../../components/components/Header/Header";
import { Link } from "react-router-dom";

const Inicial = () => {
  return (
    <>
    <Header/>
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
          </table>

          <div className="botao-cadastro">
            <button type="button" className="bcad-inferior">
              Cadastrar Horário
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Inicial;
