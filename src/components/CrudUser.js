// Importa bibliotecas e componentes necessários
import React, { useState, useEffect } from "react"; // Importa React e hooks useState e useEffect
import Form from "./Form"; // Importa o componente Form para adicionar novos usuários
import Table from "./Table"; // Importa o componente Table para exibir a lista de usuários
import { httpHelper } from "../helpers/httpHelper"; // Importa a função httpHelper para realizar requisições HTTP

// Componente principal para gerenciar CRUD de usuários
const CrudUser = () => {
  const [users, setUsers] = useState(null); // Estado para armazenar a lista de usuários

  const url = "http://localhost:5000/users"; // URL da API para usuários
  const api = httpHelper(); // Inicializa o helper para realizar chamadas à API

  // Efeito colateral para buscar usuários ao montar o componente
  useEffect(() => {
    getUsers(); // Chama a função para buscar usuários
  }, []); // Dependência vazia para executar apenas uma vez ao montar

  // Função para enviar um novo usuário para a API
  const postUser = (user) => {
    api
      .post(`${url}`, { body: user }) // Realiza requisição POST para adicionar um usuário
      .then((res) => getUsers()) // Atualiza a lista de usuários após sucesso
      .catch((err) => console.log(err)); // Registra erro em caso de falha
  };

  // Função para atualizar um usuário existente
  const updateUser = (id, user) => {
    api
      .put(`${url}/${id}`, { body: user }) // Realiza requisição PUT para atualizar o usuário
      .then((res) => getUsers()) // Atualiza a lista de usuários após sucesso
      .catch((err) => console.log(err)); // Registra erro em caso de falha
  };

  // Função para deletar um usuário
  const deleteUser = (id) => {
    api
      .del(`${url}/${id}`, {}) // Realiza requisição DELETE para remover o usuário
      .then((res) => getUsers()) // Atualiza a lista de usuários após sucesso
      .catch((err) => console.log(err)); // Registra erro em caso de falha
  };

  // Função para buscar todos os usuários da API
  const getUsers = () => {
    api
      .get(`${url}?_expand=companies`) // Realiza requisição GET para buscar usuários com informações adicionais
      .then((res) => {
        setUsers(res); // Atualiza o estado com a lista de usuários retornada
      })
      .catch((err) => console.log(err)); // Registra erro em caso de falha
  };

  // Retorna null se não houver usuários para evitar renderização de componentes
  if (!users) return null;

  // Renderiza o formulário e a tabela de usuários
  return (
    <>
      <h3>New user</h3> {/* Título para seção de novo usuário */}
      <Form postUser={postUser} />{" "}
      {/* Componente Form para adicionar um novo usuário */}
      <div className="all-users">
        {" "}
        {/* Container para a lista de todos os usuários */}
        <h3>All users</h3> {/* Título para seção de usuários existentes */}
        <Table
          users={users} // Passa a lista de usuários para o componente Table
          setUsers={setUsers} // Passa a função para atualizar a lista de usuários
          postUser={postUser} // Passa a função para adicionar um novo usuário
          updateUser={updateUser} // Passa a função para atualizar um usuário
          deleteUser={deleteUser} // Passa a função para deletar um usuário
        />
      </div>
    </>
  );
};

// Exporta o componente CrudUser para uso em outros módulos
export default CrudUser;
