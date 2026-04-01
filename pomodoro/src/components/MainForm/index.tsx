import { DefaultInput } from "../DefaultInput"  
import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"
import { PlayCircleIcon } from "lucide-react"
import React, { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes"


export function MainForm(){
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

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
        }

        const secondsRemaining = newTask.duration * 60;

        setState((prevState) => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,  
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
        })

        

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