// Função httpHelper que retorna métodos para realizar requisições HTTP
export const httpHelper = () => {
  // Função personalizada para realizar chamadas fetch
  const customFetch = async (url, options = {}) => {
    const defaultMethod = "GET"; // Método padrão para requisições
    const defaultHeaders = {
      "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      Accept: "application/json", // Aceita resposta no formato JSON
    };
    const controller = new AbortController(); // Controlador para abortar requisições
    options.signal = controller.signal; // Adiciona o sinal de aborto às opções

    // Define o método da requisição, se não especificado, usa o método padrão
    options.method = options.method || defaultMethod;
    // Mescla os headers padrão com os fornecidos, se houver
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    // Converte o corpo da requisição para JSON, se houver
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; // Remove o corpo se não houver dados

    // Define um timeout para abortar a requisição após 3 segundos
    setTimeout(() => {
      controller.abort();
    }, 3000);

    try {
      // Realiza a chamada fetch com a URL e opções especificadas
      const response = await fetch(url, options);
      return await response.json(); // Retorna a resposta como JSON
    } catch (err) {
      return err; // Retorna erro em caso de falha
    }
  };

  // Método GET para realizar requisições
  const get = (url, options = {}) => customFetch(url, options);

  // Método POST para realizar requisições
  const post = (url, options) => {
    options.method = "POST"; // Define o método como POST
    return customFetch(url, options); // Chama a função customFetch
  };

  // Método PUT para realizar requisições
  const put = (url, options) => {
    options.method = "PUT"; // Define o método como PUT
    return customFetch(url, options); // Chama a função customFetch
  };

  // Método DELETE para realizar requisições
  const del = (url, options) => {
    options.method = "DELETE"; // Define o método como DELETE
    return customFetch(url, options); // Chama a função customFetch
  };

  // Retorna um objeto com os métodos para uso externo
  return {
    get,
    post,
    put,
    del,
  };
};
