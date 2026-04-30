import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export const TaskActionsType = {
    START_TASK: "START_TASK",
    INTERUPT_TASK: "INTERRUPT_TASK",
    RESET_TASK: "RESET_TASK",
    COUNT_DOWN: "COUNT_DOWN",
    COMPLETE_TASK: 'COMPLETE_TASK',
    CHANGE_SETTINGS: 'CHANGE_SETTINGS'
}as const;


export type TasKActionModelWithPayload = {
    type: typeof TaskActionsType.START_TASK
    payload: TaskModel
}
| {
    type: typeof TaskActionsType.COUNT_DOWN
    payload: { secondsRemaining: number }
}
| {
    type: typeof TaskActionsType.CHANGE_SETTINGS
    payload: TaskStateModel['config'];
};


export type TaskActionModelWithoutPayload = {
    type: typeof TaskActionsType.RESET_TASK |
     typeof TaskActionsType.INTERUPT_TASK |  typeof TaskActionsType.COMPLETE_TASK
}


export type TaskActionModel = TasKActionModelWithPayload | TaskActionModelWithoutPayload ;