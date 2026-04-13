import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { type TaskActionModel, TaskActionsType } from './taskActions';

export function TaskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsType.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      }

    }
    case TaskActionsType.INTERUPT_TASK: {
      
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if(state.activeTask && state.activeTask.id === task.id){
          return {...task, interruptDate: Date.now()};
          }
          return task;
}),

      }
    }
    case TaskActionsType.RESET_TASK: {
      return state;
    }
  }

  // Sempre deve retornar o estado
  return state;
}

