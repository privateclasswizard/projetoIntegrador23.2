import Reacts from "react";
import Header from "../../components/assets/js/Header/HeaderLogonOn.js";
import FormRegistroHorario from "../../components/assets/js/FormRegistroHorario/FormRegistroHorario.js";

const RegistroHorario = () => {
  return (
    <div className="containerRegistroHorario">
    <Header/>
      <h1> Registro Horario</h1>
      <div className="selectRegistroHorario">
        <div className="containerformRegistroHorario">
        <FormRegistroHorario/>

        
        </div>
      </div>   
    </div>
  );
};

export default RegistroHorario;
