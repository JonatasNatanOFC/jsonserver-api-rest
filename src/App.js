// Importa o ícone do logo do diretório de assets/icons
import { LogoIcon } from "./assets/icons";

// Importa o componente CrudUser do diretório de components
import CrudUser from "./components/CrudUser";

// Importa os estilos CSS para a aplicação
import "./styles/App.css";

// Define o componente principal da aplicação
function App() {
  return (
    <>
      {/* Fragmento React para agrupar elementos sem adicionar nós ao DOM */}
      <header>
        <div className="header__content">
          {/* Container para o conteúdo do cabeçalho */}
          <div className="logo">
            {/* Container para o logo e título */}
            <LogoIcon /> {/* Renderiza o ícone do logo */}
            <strong>JSON SERVER API</strong> {/* Exibe o título em negrito */}
          </div>
        </div>
      </header>
      <main>
        <CrudUser />
        {/* Renderiza o componente responsável pela manipulação de usuários */}
      </main>
    </>
  );
}

// Exporta o componente App para que possa ser utilizado em outros módulos
export default App;
