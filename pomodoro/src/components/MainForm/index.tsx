import { DefaultInput } from "../DefaultInput"  
import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"
import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import React, { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { TaskActionsType } from "../../contexts/TaskContext/taskActions"
import { Tips } from "../tips"


export function MainForm(){
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    //tips


    //const [taskName, setTaskName] = useState(''); achei que assim seria melhor, mas pra validação do input, o ideal é usar o useRef, pois ele tem acesso direto ao elemento do DOM, e não precisa ficar renderizando o componente toda vez que o valor do input mudar, como acontece com o useState.

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const taskName = taskNameInput.current?.value.trim();

         if(taskName === null)return;

        if(!taskName){
            alert('Digite o nome de sua tarefa');
            return;
        }
        

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            startDate: Date.now(),
            type: nextCycleType,
        };

        dispatch({type: TaskActionsType.START_TASK, payload: newTask})
    }

    function handleInterruptTask(){
        dispatch({type: TaskActionsType.INTERUPT_TASK})
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
                            disabled={!!state.activeTask}
                            />
                        </div>
                        
                        <div className='formRow'>
                           <Tips />
                        </div>
        

                        {state.currentCycle > 0 && (
                        <div className='formRow'>
                          <Cycles />
                        </div>
                        )}

                        <div className='formRow'>
                            {!state.activeTask ? (
                           <DefaultButton
                            aria-label="Iniciar nova tarefa"
                            title="Iniciar nova tarefa"
                            type="submit"
                            icon={<PlayCircleIcon
                            key='botao de submit'   
                            />} />
                           ) : (
                            <DefaultButton
                            aria-label="Interromper tarefa atual" 
                            title="Interromper Tarefa atual"
                            type="button"
                            icon={<StopCircleIcon />}
                            color='red'
                            key='Nao reenviar o form'
                            onClick={handleInterruptTask}
                            />
                           )}
                        </div>
                    </form>
    </>                
    )
}