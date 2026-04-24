✨ TIEMPO FOCUS - React Pomodoro Timer 🍅
🎯 Um sofisticado Timer de Pomodoro focado em gestão de tempo e produtividade máxima! Desenvolvido para aplicar e solidificar conceitos avançados de React, TypeScript e componentização. 

🛠️ 💻 TECNOLOGIAS E FERRAMENTAS 💻 🛠️
Este projeto foi construído utilizando o que há de melhor no ecossistema moderno:

⚛️ REACT JS: A biblioteca principal trazendo a mágica para a interface do usuário! ✨

📘 TYPESCRIPT: Tipagem estática rigorosa para garantir segurança, previsibilidade e um código blindado! 🛡️

⚡ VITE: Ferramenta de build e dev server rápida como um raio! 🌩️

🎨 CSS MODULES: Estilização escopada, super organizada e 100% livre de conflitos! 🖌️

🐳 DOCKER: Aplicação conteinerizada para rodar liso e sem dores de cabeça em qualquer lugar! 🚢

🧠 💡 CONCEITOS E PRÁTICAS APLICADAS 💡 🧠
Durante a construção deste software, mergulhamos fundo nos seguintes conceitos:

🪝 React Hooks Avançados: Domínio total de estados e ciclos de vida utilizando useState, useEffect e useCallback. 🔄

⏱️ Gerenciamento de Tempo Ninja: Controle cirúrgico de intervalos e timers na web usando APIs nativas (setInterval, clearInterval). ⚙️

🧱 Design de Componentes: Arquitetura limpa baseada em componentes altamente reutilizáveis e independentes (Padrão de exportação no index.tsx). 🏗️

🧩 Tipagem Rigorosa: Uso inteligente de Interfaces e tipos nativos do HTML via TypeScript (como ButtonHTMLAttributes) para construir bases robustas! 🧱

🐳 🚀 COMO RODAR COM DOCKER 🚀 🐳
🌟 Sem dor de cabeça instalando dependências locais! Se você tem o Docker rodando, é só dar o play. 🌟

1️⃣ Clone o repositório e entre na pasta do projeto:
Navegue até a raiz onde o Dockerfile está esperando por você. 📂

2️⃣ Construa a Imagem Docker:
Rode o comando abaixo para empacotar a aplicação:


Bash
docker build -t tiempo-focus .

3️⃣ Suba o Container:
Agora, vamos mapear a porta do Vite e colocar a aplicação no ar:


Bash
docker run -d -p 5173:5173 --name pomodoro-app tiempo-focus
🎉 PRONTO! É só acessar http://localhost:5173 no seu navegador e começar a focar! 🎯

📝 📜 LICENÇA E USO 📜 📝
Este projeto foi desenvolvido com foco educacional e para compor portfólio.
Sinta-se 100% à vontade para explorar, clonar e inspecionar o código-fonte! 💻 🔓
