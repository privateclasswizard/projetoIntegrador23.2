import Reacts from "react";

const RegistroHorario = () => {
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
          <form className="formcadastro">
            <div class="nameclient">
              <label for="nclient" id="client">Cliente: </label>
              <input type="text" id="nclient" name="nclient" />
            </div>
            <div class="numberclient">
              <label for="telclient" id="phoneclient">Celular: </label>
              <input type="tel" id="telclient" />
            </div>
            <div class="barber">
              <label for="barbername" id="barberman">Barbeiro: </label>
              <input type="text" id="barbername" name="barbername" />
            </div>
            <div class="dateservice">
              <label for="dateclient" id="servicedate">Data: </label>
              <input type="date" name="datereserveclient" id="datereserveclient" />
            </div>
            <div class="hour">
              <label for="hourclient" id="hourservice">Horário: </label>
              <input type="time" name="timeclient" id="timeclient" />
            </div>
            <div class="locale">
              <label for="localebarber" id="localeforservice">Barbearia: </label>
              <select name="select">
                <option value="flocale">Vila Nova</option>
              </select>
            </div>
            <div class="botoes">
              <button type="button" id="button-save">Salvar</button>
              <button type="button" id="button-delete">Excluir</button>
            </div>
          </form>
        </div>
      </body>
    </>
    )
}

export default RegistroHorario