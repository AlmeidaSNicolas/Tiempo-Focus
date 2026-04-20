import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips(){

    const {state} = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
        const nextCycleType = getNextCycleType(nextCycle);
    

    const tipsForActiveTask = {
        workTime: <span>Foque por <b>{state.config.workTime}  minutos </b></span>,
        shortBreakTime: <span>Descance por <b>{state.config.shortBreakTime} minutos </b></span>,
        longBreakTime: <span>Descanso longo </span>,
    }

    const tipsForNoActiveTask = {
        workTime: <span>Proximo ciclo é de trabalho</span>,
        shortBreakTime: <span>Proximo ciclo é de descanso</span>,
        longBreakTime: <span>Proximo descanso sera longo </span>,
    }


    return(
        <>
            {state.activeTask && tipsForActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}