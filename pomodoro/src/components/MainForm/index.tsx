import { DefaultInput } from "../DefaultInput"  
import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"
import { PlayCircleIcon } from "lucide-react"
import { useRef } from "react"


export function MainForm(){

    const taskNameInput = useRef<HTMLInputElement>(null);

    //const [taskName, setTaskName] = useState(''); achei que assim seria melhor, mas pra validação do input, o ideal é usar o useRef, pois ele tem acesso direto ao elemento do DOM, e não precisa ficar renderizando o componente toda vez que o valor do input mudar, como acontece com o useState.

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        console.log('deu certo');
    }
    return(
    <> 
          <form onSubmit={handleCreateNewTask} className='form' action=''>
                        <div className='formRow'>
                            <DefaultInput 
                            labelText= 'Tarefa' 
                            id='input'
                            type='text' 
                            placeholder='Digite o nome da tarefa'
                            ref={taskNameInput}
                            //value={taskName} 
                            //onChange={(e) => setTaskName(e.target.value)}
                            />
                        </div>
        
                        <div className='formRow'>
                           <p>Lorem ipsum dolor sit amet.</p>
                        </div>
        
                        <div className='formRow'>
                          <Cycles />
                        </div>
        
                        <div className='formRow'>
                           <DefaultButton icon={<PlayCircleIcon />} />
                        </div>
                    </form>
    </>                
    )
}