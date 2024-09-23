// Importa React e o componente Form
import React from "react";
import Form from "./Form";

// Componente Table para exibir a lista de usuários e suas ações
const Table = ({ users, postUser, updateUser, deleteUser }) => {
  // Função para alternar a exibição do formulário de atualização de usuário
  const showUpdateUser = (id) => {
    const form = document.getElementsByClassName(`show-form-${id}`); // Seleciona o formulário correspondente pelo ID
    form[0].classList.toggle("hide-form"); // Alterna a classe "hide-form" para mostrar ou ocultar o formulário
  };

  // Componente Row para renderizar cada usuário na tabela
  const Row = ({ user }) => {
    return (
      <>
        <div className="row">
          {" "}
          {/* Container para as informações do usuário */}
          <div>{user.name}</div> {/* Nome do usuário */}
          <div>{user.email}</div> {/* Email do usuário */}
          <div>{user.phone}</div> {/* Telefone do usuário */}
          <div>{user.companies.name}</div> {/* Nome da empresa do usuário */}
          <div className="buttons">
            {" "}
            {/* Container para os botões de ação */}
            <button onClick={() => showUpdateUser(user.id)}>Update</button>{" "}
            {/* Botão para atualizar o usuário */}
            <button onClick={() => deleteUser(user.id)}>Delete</button>{" "}
            {/* Botão para deletar o usuário */}
          </div>
        </div>
        {/* Formulário de atualização escondido inicialmente */}
        <div className={`hide-form show-form-${user.id}`}>
          <Form userData={user} postUser={postUser} updateUser={updateUser} />{" "}
          {/* Componente Form para editar o usuário */}
        </div>
      </>
    );
  };

  // Renderiza a tabela de usuários
  return (
    <div className="table">
      {" "}
      {/* Container da tabela */}
      <div className="titles">
        {" "}
        {/* Títulos das colunas */}
        <div>Name</div> {/* Título da coluna "Nome" */}
        <div>Email</div> {/* Título da coluna "Email" */}
        <div>Phone</div> {/* Título da coluna "Telefone" */}
        <div>Company</div> {/* Título da coluna "Empresa" */}
        <div>Actions</div> {/* Título da coluna "Ações" */}
      </div>
      <div className="rows">
        {" "}
        {/* Container para as linhas de usuários */}
        {users && users.map((u) => <Row user={u} key={u.id} />)}{" "}
        {/* Mapeia e renderiza cada usuário */}
      </div>
    </div>
  );
};

// Exporta o componente Table para uso em outros módulos
export default Table;
