// Importa React e hooks necessários
import React, { useState, useEffect } from "react";

// Importa a função httpHelper para realizar requisições HTTP
import { httpHelper } from "../helpers/httpHelper";

// Componente para exibir um dropdown de empresas
const DropCompanies = ({ companiesId, handleValue }) => {
  const [companies, setCompanies] = useState(null); // Estado para armazenar a lista de empresas
  const [company, setCompany] = useState(companiesId); // Estado para armazenar a empresa selecionada

  const url = "http://localhost:5000/companies"; // URL da API para empresas
  const api = httpHelper(); // Inicializa o helper para realizar chamadas à API

  // Efeito colateral para buscar a lista de empresas ao montar o componente
  useEffect(() => {
    api
      .get(url) // Realiza requisição GET para buscar empresas
      .then((res) => {
        // Adiciona uma opção "Select Company" à lista de empresas
        setCompanies([{ id: 0, name: "Select Company" }, ...res]);
      })
      .catch((err) => console.log(err)); // Registra erro em caso de falha
  }, []); // Dependência vazia para executar apenas uma vez ao montar

  // Retorna null se a lista de empresas ainda não foi carregada
  if (!companies) return null;

  // Renderiza o dropdown de empresas
  return (
    <select
      name="companiesId" // Nome do campo para identificação
      value={company} // Define o valor selecionado como a empresa armazenada
      onChange={(e) => {
        setCompany(e.target.value); // Atualiza o estado da empresa selecionada
        handleValue(e); // Chama a função handleValue passada como prop
      }}
    >
      {/* Mapeia as empresas para criar opções no dropdown */}
      {companies.map((c) => (
        <option value={c.id} key={c.id}>
          {" "}
          {/* Cada opção recebe um valor e uma chave única */}
          {c.name} {/* Exibe o nome da empresa */}
        </option>
      ))}
    </select>
  );
};

// Exporta o componente DropCompanies para uso em outros módulos
export default DropCompanies;
