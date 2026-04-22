import type { TaskModel } from "../../models/TaskModel";

export const TaskActionsType = {
    START_TASK: "START_TASK",
    INTERUPT_TASK: "INTERRUPT_TASK",
    RESET_TASK: "RESET_TASK",
    COUNT_DOWN: "COUNT_DOWN",
    COMPLETE_TASK: 'COMPLETE_TASK'
}as const;

export type TaskActionModelWithPayload = {
    type: typeof TaskActionsType.START_TASK 
    payload: TaskModel
} | {
    type: typeof TaskActionsType.COUNT_DOWN
    payload: {
        secondsRemaining: number
    }};

export type TaskActionModelWithoutPayload = {
    type: typeof TaskActionsType.RESET_TASK |
     typeof TaskActionsType.INTERUPT_TASK |  typeof TaskActionsType.COMPLETE_TASK
}


export type TaskActionModel = TaskActionModelWithPayload | TaskActionModelWithoutPayload ;