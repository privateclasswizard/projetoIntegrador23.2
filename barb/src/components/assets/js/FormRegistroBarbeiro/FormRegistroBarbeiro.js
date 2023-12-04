import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormRegistroHorario() {
  const [formData, setFormData] = useState({
    nome: "",
    phoneNumber: "",
    checked: false,
  });

  const [barbeiros, setBarbeiros] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adiciona o novo barbeiro à lista
    setBarbeiros([...barbeiros, formData]);

    // Salva no Local Storage (converte para JSON)
    localStorage.setItem("barbeiros", JSON.stringify([...barbeiros, formData]));

    // Limpa o formulário
    setFormData({
      nome: "",
      phoneNumber: "",
      checked: false,
    });
  };

  useEffect(() => {
    // Carrega os barbeiros do Local Storage ao iniciar
    const savedBarbeiros = JSON.parse(localStorage.getItem("barbeiros")) || [];
    setBarbeiros(savedBarbeiros);
  }, []);
  return (
    
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="formGridNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="Enter Nome"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPhoneNumber">
        <Form.Label className="white-text">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          name="checked"
          checked={formData.checked}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     <hr />

     <h2>Barbeiros Cadastrados</h2>
     <table className="table">
       <thead>
         <tr>
           <th>Nome</th>
           <th>Telefone</th>
           <th>Check</th>
         </tr>
       </thead>
       <tbody>
         {barbeiros.map((barbeiro, index) => (
           <tr key={index}>
             <td>{barbeiro.nome}</td>
             <td>{barbeiro.phoneNumber}</td>
             <td>{barbeiro.checked ? "Sim" : "Não"}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>

  );
}

export default FormRegistroHorario;