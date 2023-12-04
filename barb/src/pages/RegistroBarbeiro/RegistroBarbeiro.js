import Reacts from "react";
import Header from "../../components/assets/js/Header/HeaderLogonOn.js";
import FormRegistroBarbeiro from "../../components/assets/js/FormRegistroBarbeiro/FormRegistroBarbeiro.js";

const RegistroBarbeiro = () => {
    return (
        <div className="containerRegistroBarbeiro">
        <Header/>
          <h1> Registro Barbeiro</h1>
          <div className="selectRegistroBarbeiro">
            <div className="containerformRegistroBarbeiro">
                <FormRegistroBarbeiro/>
              
            </div>
          </div>   
        </div>
    )
}

export default RegistroBarbeiro