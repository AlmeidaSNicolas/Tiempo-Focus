⏱️ Tiempo Focus - React Pomodoro Timer
Um sofisticado Timer de Pomodoro focado em gestão de tempo e produtividade. Desenvolvido para aplicar e solidificar conceitos avançados de React, TypeScript e componentização.

🚀 Tecnologias e Ferramentas
Este projeto foi construído utilizando as seguintes tecnologias do ecossistema moderno:

⚛️ React JS: Biblioteca principal para a construção da interface do usuário.

📘 TypeScript: Tipagem estática para garantir segurança, previsibilidade de código e maior produtividade no desenvolvimento.

⚡ Vite: Ferramenta de build e dev server incrivelmente rápida.

🎨 CSS Modules: Para uma estilização escopada, organizada e livre de conflitos de classes.

🐳 Docker: Conteinerização da aplicação para garantir consistência e facilidade de deploy em qualquer ambiente.

🧠 Conceitos e Práticas Aplicadas
Durante a construção deste software, foram implementados os seguintes conceitos:

React Hooks Avançados: Domínio de estados e ciclos de vida com useState, useEffect e useCallback.

Gerenciamento de Tempo: Controle preciso de intervalos e timers na web utilizando as APIs nativas (setInterval, clearInterval).

Design de Componentes: Arquitetura baseada em componentes reutilizáveis e independentes (Padrão de exportação em index.tsx).

Tipagem Rigorosa: Uso de Interfaces e tipos nativos do HTML via TypeScript (como ButtonHTMLAttributes) para construir componentes base robustos.

🐳 Como rodar com Docker
A aplicação está dockerizada para facilitar a execução sem precisar instalar as dependências do Node.js localmente. Para rodar, certifique-se de ter o Docker rodando na sua máquina e siga os comandos abaixo:

Clone o repositório e navegue até a raiz do projeto (onde o Dockerfile está localizado).

Construa a imagem Docker:

Bash
docker build -t tiempo-focus .
Rode o container mapeando a porta padrão do Vite (5173) para a sua máquina:

Bash
docker run -d -p 5173:5173 --name pomodoro-app tiempo-focus
Agora é só acessar http://localhost:5173 no seu navegador e utilizar o timer.

📝 Licença
Este projeto foi desenvolvido com foco educacional e portfólio. Sinta-se à vontade para explorar, clonar e inspecionar o código-fonte!
