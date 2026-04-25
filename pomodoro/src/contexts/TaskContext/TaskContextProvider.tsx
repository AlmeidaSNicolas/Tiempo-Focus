import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { TaskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";
import { TaskActionsType } from "./taskActions";
import { loadBeep } from "../../utils/loadBip";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({children}: TaskContextProviderProps){
    const [state, dispatch] = useReducer( TaskReducer ,initialTaskState, () => {
        const storeState = localStorage.getItem('state');

        if(storeState === null) return initialTaskState;
    
        const parsedStorageState = JSON.parse(storeState) as TaskStateModel;

        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
        };
    });


    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const worker = TimerWorkerManager.getInstance();

    useEffect(() => {
        worker.onmessage(e => {
            const countdownSeconds = Number(e.data);

            if(countdownSeconds <= 0){
                if(playBeepRef.current){
                    playBeepRef.current();
                    playBeepRef.current = null;
                }

                dispatch({type: TaskActionsType.COMPLETE_TASK});
            } else {
                dispatch({type: TaskActionsType.COUNT_DOWN, payload:{secondsRemaining: countdownSeconds}});
            }
        })
    })

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));


        if(!state.activeTask){
            worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - Tiempo Focus`;

        worker.postMessage(state);
    }, [ worker ,state])

    useEffect(() => {
        if(state.activeTask && playBeepRef.current === null){
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask])

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
    
}