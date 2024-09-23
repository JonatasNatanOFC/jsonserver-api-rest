// Importa a biblioteca React para criar componentes
import React from "react";

// Importa o ReactDOM para renderizar componentes React no DOM
import ReactDOM from "react-dom";

// Importa o componente principal da aplicação
import App from "./App";

// Renderiza o componente App dentro do elemento HTML com o ID "root"
ReactDOM.render(
  <React.StrictMode>
    {" "}
    {/* Modo estrito para ajudar a identificar problemas em componentes */}
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>,
  document.getElementById("root") // Seleciona o elemento com o ID "root" como ponto de montagem
);
