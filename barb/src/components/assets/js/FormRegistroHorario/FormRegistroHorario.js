import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function FormRegistroHorario() {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    numeroCliente: "",
    selectedBarbeiro: "",
    data: "",
    horario: "",
  });

  const [barbeiros, setBarbeiros] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoAgendamento = {
      nomeCliente: formData.nomeCliente,
      numeroCliente: formData.numeroCliente,
      barbeiro: formData.selectedBarbeiro,
      data: formData.data,
      horario: formData.horario,
    };

    if (modoEdicao) {
      // Editar agendamento existente
      const novosAgendamentos = [...agendamentos];
      novosAgendamentos[indiceEdicao] = novoAgendamento;
      setAgendamentos(novosAgendamentos);
      setModoEdicao(false);
      setIndiceEdicao(null);
    } else {
      // Adicionar novo agendamento
      setAgendamentos([...agendamentos, novoAgendamento]);
    }

    // Limpar o formulário
    setFormData({
      nomeCliente: "",
      numeroCliente: "",
      selectedBarbeiro: "",
      data: "",
      horario: "",
    });
  };

  const handleEditar = (index) => {
    // Preencher o formulário com os dados do agendamento selecionado
    const agendamentoSelecionado = agendamentos[index];
    setFormData({
      nomeCliente: agendamentoSelecionado.nomeCliente,
      numeroCliente: agendamentoSelecionado.numeroCliente,
      selectedBarbeiro: agendamentoSelecionado.barbeiro,
      data: agendamentoSelecionado.data,
      horario: agendamentoSelecionado.horario,
    });

    setModoEdicao(true);
    setIndiceEdicao(index);
  };

  const handleExcluir = (index) => {
    // Excluir agendamento
    const novosAgendamentos = [...agendamentos];
    novosAgendamentos.splice(index, 1);
    setAgendamentos(novosAgendamentos);
  };

  useEffect(() => {
    const savedBarbeiros = JSON.parse(localStorage.getItem("barbeiros")) || [];
    setBarbeiros(savedBarbeiros);

    const savedAgendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setAgendamentos(savedAgendamentos);
  }, []);

  useEffect(() => {
    // Atualizar Local Storage ao modificar agendamentos
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  }, [agendamentos]);

  
  return (
<div>
<Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="formGridNomeCliente">
          <Form.Label>Nome do Cliente</Form.Label>
          <Form.Control
            type="text"
            name="nomeCliente"
            value={formData.nomeCliente}
            onChange={handleInputChange}
            placeholder="Digite o nome do cliente"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumeroCliente">
          <Form.Label>Número do Cliente</Form.Label>
          <Form.Control
            type="text"
            name="numeroCliente"
            value={formData.numeroCliente}
            onChange={handleInputChange}
            placeholder="Digite o número do cliente"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBarbeiro">
          <Form.Label>Selecione o Barbeiro</Form.Label>
          <Form.Control
            as="select"
            name="selectedBarbeiro"
            value={formData.selectedBarbeiro}
            onChange={handleInputChange}
          >
            <option value="">Selecione um Barbeiro</option>
            {barbeiros.map((barbeiro, index) => (
              <option key={index} value={barbeiro.nome}>
                {barbeiro.nome}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridData">
          <Form.Label>Data do Agendamento</Form.Label>
          <Form.Control
            type="date"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridHorario">
          <Form.Label>Horário do Agendamento</Form.Label>
          <Form.Control
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {modoEdicao ? "Editar Agendamento" : "Agendar"}
        </Button>
      </Form>

      <hr />

      <h2>Agendamentos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>Número Cliente</th>
            <th>Barbeiro</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map((agendamento, index) => (
            <tr key={index}>
              <td>{agendamento.nomeCliente}</td>
              <td>{agendamento.numeroCliente}</td>
              <td>{agendamento.barbeiro}</td>
              <td>{agendamento.data}</td>
              <td>{agendamento.horario}</td>
              <td>
                <Button variant="info" onClick={() => handleEditar(index)}>
                  Editar
                </Button>{" "}
                <Button variant="danger" onClick={() => handleExcluir(index)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormRegistroHorario;