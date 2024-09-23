// Importa React e useState
import React, { useState } from "react";

// Importa o componente DropCompanies para seleção de empresas
import DropComapies from "./DropCompanies";

// Componente Form para adicionar ou editar informações de um usuário
const Form = ({ userData = {}, postUser, updateUser }) => {
  // Inicializa o estado do usuário com dados fornecidos ou valores padrão
  const [user, setUser] = useState({
    name: userData.name ?? "", // Nome do usuário
    username: userData.username ?? "", // Nome de usuário
    email: userData.email ?? "", // Email do usuário
    phone: userData.phone ?? "", // Telefone do usuário
    companiesId: userData.companiesId ?? "0", // ID da empresa selecionada, padrão "0"
  });

  // Função para atualizar o estado do usuário com base na entrada do formulário
  const handleValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // Atualiza o campo correspondente no estado
  };

  // Função para lidar com a submissão do formulário
  const submitUser = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de submissão do formulário

    if (user.companiesId === "0") return; // Impede submissão se nenhuma empresa for selecionada

    // Verifica se já existem dados de usuário para atualização ou nova inserção
    if (userData.id) {
      updateUser(userData.id, user); // Atualiza usuário existente
    } else {
      postUser(user); // Cria novo usuário
    }
  };

  // Renderiza o formulário de entrada de dados
  return (
    <form onSubmit={submitUser} className="row">
      {" "}
      {/* Formulário com handler de submissão */}
      <input
        type="text"
        name="name"
        value={user.name} // Valor do input para nome
        placeholder="Name" // Texto de ajuda no input
        onChange={(e) => handleValue(e)} // Atualiza estado no evento de mudança
      />
      <input
        type="email"
        name="email"
        value={user.email} // Valor do input para email
        placeholder="Email" // Texto de ajuda no input
        onChange={(e) => handleValue(e)} // Atualiza estado no evento de mudança
      />
      <input
        type="tel"
        name="phone"
        value={user.phone} // Valor do input para telefone
        placeholder="Phone (10)" // Texto de ajuda no input
        pattern="[0-9]{10}" // Define um padrão para validação do telefone
        onChange={(e) => handleValue(e)} // Atualiza estado no evento de mudança
      />
      {/* Componente DropCompanies para seleção da empresa */}
      <DropComapies companiesId={user.companiesId} handleValue={handleValue} />
      <input
        className="btn-submit" // Estilo para o botão de submissão
        type="submit" // Tipo do input como botão de submissão
        value={`${!userData.id ? "Add new user" : "Save user"}`} // Texto do botão baseado na presença de userData.id
      />
    </form>
  );
};

// Exporta o componente Form para uso em outros módulos
export default Form;
