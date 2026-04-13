    function handleInterruptTask(){
        setState((prevState) => {
            return {
                ...prevState,
                activeTask: null,
               currentCycle: nextCycle,  
                secondsRemaining: 0,
                formattedSecondsRemaining: formatSecondsToMinutes(state.config[nextCycleType] * 60),
                tasks: prevState.tasks.map(task => {
                    if(prevState.activeTask && prevState.activeTask.id === task.id){
                        return {...task, interruptDate: Date.now()};
                    }
                   return task;
               })
           }
        })
    }
