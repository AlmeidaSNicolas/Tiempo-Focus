import { TrashIcon } from "lucide-react"
import { Container } from "../../components/Container"
import { DefaultButton } from "../../components/DefaultButton"
import Heading from "../../components/Heading"
import MainTemplate from "../../Templates/MainTemplate"

import styles from './style.module.css'
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { formatdate } from "../../utils/formatDate"
import { getTaskStatus } from "../../utils/getTaskStatus"
import { TaskActionsType } from "../../contexts/TaskContext/taskActions"


export function History(){

    const {state, dispatch} = useTaskContext();
    const sortDate = [...state.tasks].sort((a, b) => {
        return b.startDate - a.startDate;
    })
    const hasTask = state.tasks.length > 0;


    function resetHistory(){
        dispatch({ type: TaskActionsType.RESET_TASK})
    } 

    return(
        <>
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTask && (
                        <span className={styles.buttonContainer}> 
                        <DefaultButton 
                            icon={<TrashIcon />} 
                            color="red"
                            aria-label="Apagar historico" 
                            title='Apagar historico' 
                            onClick={(resetHistory)}>
                    </DefaultButton>
                    </span>
                    )}
                </Heading>
            </Container>

        <Container>
            {hasTask && (
            <div className={styles.responsiveTable} >
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Tipo</th> 
                        </tr>
                    </thead>

                    <tbody> 
                       {sortDate.map((task) => {
                        const taskDictyonary = {
                            workTime: 'Foco',
                            shortBreakTime: 'Descanço Curto',
                            longBreakTime: 'Descanço Longo'
                        }
                        return (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{task.duration}min</td>
                            <td>{formatdate(task.startDate)}</td>
                            <td>{getTaskStatus(task, state.activeTask)}</td>
                            <td>{taskDictyonary[task.type]}</td>
                         </tr>
)
                       })}  
                    </tbody>
                </table>

            </div>
          )}  
        {!hasTask && <p style={{textAlign: 'center', fontWeight: 'bold'}}>Voce ainda não criou uma tarefa</p>}
        </Container>
        </MainTemplate>           
        </>
    )
}


