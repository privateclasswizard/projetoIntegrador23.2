import '../components/assets/css/RegistrarHorario.css'
import navalha from "../components/assets/icons/navalha.png";
import bell from "../components/assets/icons/sino.svg"
import iconuser from "../components/assets/icons/iconuser.svg"
import "../components/assets/css/Login.css";
import "../components/assets/css/inicial.css"

function ConfirmarHorario() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src={navalha} alt="logo" id="svg" />
          

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
        <div className="container">
          <div className='FormElements'> 
          <form className="formcadastro">
            <div className="nameclient">
              <label htmlFor="nclient" id="client">Cliente: </label>
              <input type="text" id="nclient" name="nclient" />
            </div>
            <div className="numberclient">
              <label htmlFor="telclient" id="phoneclient">Celular: </label>
              <input type="tel" id="telclient" />
            </div>
            <div className="barber">
              <label htmlFor="barbername" id="barberman">Barbeiro: </label>
              <input type="text" id="barbername" name="barbername" />
            </div>
            <div className="dateservice">
              <label htmlFor="dateclient" id="servicedate">Data: </label>
              <input type="date" name="datereserveclient" id="datereserveclient" />
            </div>
            <div className="hour">
              <label htmlFor="hourclient" id="hourservice">Horário: </label>
              <input type="time" name="timeclient" id="timeclient" />
            </div>
            <div className="locale">
              <label htmlFor="localebarber" id="localeforservice">Barbearia: </label>
              <select name="select" id='localservice'>
                <option value="flocale">Vila Nova</option>
              </select>
            </div>
            <div className="botoes">
              <button type="button" id="button-save">Salvar</button>
              <button type="button" id="button-delete">Excluir</button>
            </div>
          </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default ConfirmarHorario;
