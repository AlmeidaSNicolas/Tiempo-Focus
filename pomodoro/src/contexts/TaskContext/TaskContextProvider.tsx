import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { TaskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";
import { TaskActionsType } from "./taskActions";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
    const [state, dispatch] = useReducer( TaskReducer ,initialTaskState);

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
            dispatch({type: TaskActionsType.COMPLETE_TASK});
        } else {
            dispatch({type: TaskActionsType.COUNT_DOWN, payload:{secondsRemaining: countDownSeconds}});
        }   
    });

    useEffect(() => {
        if(!state.activeTask){
            console.log('worker terminado por falta de active task')
            worker.terminate();
        }

        worker.postMessage(state);
    }, [ worker ,state])

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
    
}