//Exercício 1: O Componente de Layout (Básico)
//Imagine que você precisa criar um componente chamado Card. 
// Esse card deve ter uma borda, um padding e uma cor de fundo, 
// mas ele não sabe o que vai ter dentro dele (pode ser um formulário, 
// uma imagem ou apenas um parágrafo).
//Tarefa: Crie a interface CardProps e o componente Card.
//Desafio: O Card deve aceitar uma prop opcional chamada title 
// (string). Se o título existir, ele deve aparecer 
// dentro de um <h3> 
// acima do children. Se não existir, renderize apenas o children.
//Dica de Tipagem: Use React.ReactNode para o tipo do children.



interface CardProps{
    title?:string;
    children: React.ReactNode;
}

export function Card({title, children}: CardProps){
    return(
        <div>
            {title && <h3>{title}</h3>}
            {children}
        </div>
    )
}


//Exercício 2: Especialização de Botão (Intermediário)
//Em bancos, é comum termos botões que precisam de ícones antes ou depois do texto.
//Tarefa: Crie um componente IconButton.
//Desafio: Além do children (que será o texto do botão), ele deve aceitar uma prop chamada icon que também é do tipo React.ReactNode.
//Lógica: No retorno do componente, coloque o icon à esquerda do children dentro de uma tag <button>.
//Reflexão: Por que tipar o icon como ReactNode em vez de string? (Pense na flexibilidade de passar um componente de ícone de
//  uma biblioteca como Lucide ou FontAwesome).

interface IconButtonProps{
    icon: React.ReactNode;
    children: React.ReactNode;
}

export function Button({icon, children}: IconButtonProps){
    return(
        <button>
            {icon}
            {children}
        </button>
    )
}


//Exercício 3: O Wrapper de Autenticação (Avançado)
//Imagine um componente que "protege" o conteúdo. Se o usuário estiver logado, ele mostra o conteúdo; se não, mostra uma mensagem de erro.
//Tarefa: Crie um componente AuthGuard.
//Desafio: Ele deve receber children e uma prop booleana chamada isLogged.
//Lógica: * Se isLogged for true, renderize o children.
//Se for false, renderize uma <div> com a mensagem: "Acesso negado. Por favor, faça login."
//Aplicação real: No seu trabalho no banco, você usaria isso para esconder dados sensíveis de usuários que não têm permissão de nível "gerente",
//por exemplo.

interface AuthGuardProps{
    children: React.ReactNode;
    isLogged: boolean;
}

export default function AuthGuard({children, isLogged}: AuthGuardProps){
    return(
        <div>
            {isLogged ? children : <div>Acesso negado. Por favor Faça login.</div>}
        </div>
    )
}

//Exercício 1: Componente de Layout (Props e ReactNode)
//O objetivo aqui é criar um componente chamado MainLayout. Ele deve servir como uma "moldura" para a sua aplicação.
//Tarefa: Crie o componente MainLayout.
//Requisito de Props: Ele deve aceitar uma prop chamada children (do tipo React.ReactNode) e uma prop de string chamada pageTitle.
//Estrutura: Dentro do componente, renderize um <header> com o pageTitle e um <main> onde o children será exibido.

