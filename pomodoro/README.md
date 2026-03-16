# Pomodoro (React)

Projeto **Pomodoro** desenvolvido durante um curso da **Udemy**, usando **React**.

## Sobre o projeto

Este repositório contém a implementação (em andamento) de uma aplicação de Pomodoro, com foco em praticar conceitos do ecossistema React (componentização, estilos e organização do projeto).

## Tecnologias e bibliotecas

- **React**: UI (`react`, `react-dom`)
- **Vite**: bundler/dev server
- **TypeScript**: tipagem estática
- **Lucide Icons**: ícones via `lucide-react` (ex.: `TimerIcon`)
- **ESLint**: linting do código
- **CSS**: estilos globais e **CSS Modules** (ex.: `src/components/Heading.module.css`)

## Como rodar o projeto

Pré-requisito: **Node.js** (recomendado LTS).

1) Instale as dependências:

```bash
npm install
```

2) Rode em modo desenvolvimento:

```bash
npm run dev
```

3) Build de produção:

```bash
npm run build
```

4) Pré-visualização do build:

```bash
npm run preview
```

## Estrutura (resumo)

- `src/main.tsx`: bootstrap do React
- `src/App.tsx`: componente principal
- `src/components/`: componentes reutilizáveis (ex.: `Heading`)
- `src/styles/`: estilos globais/tema
