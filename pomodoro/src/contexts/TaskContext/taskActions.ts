import type { TaskModel } from "../../models/TaskModel";

export const TaskActionsType = {
    START_TASK: "START_TASK",
    INTERUPT_TASK: "INTERRUPT_TASK",
    RESET_TASK: "RESET_TASK"
}as const;

export type TaskActionModelWithPayload = {
    type: typeof TaskActionsType.START_TASK 
    payload: TaskModel
}

export type TaskActionModelWithoutPayload = {
    type: typeof TaskActionsType.RESET_TASK |
     typeof TaskActionsType.INTERUPT_TASK
}


export type TaskActionModel = TaskActionModelWithPayload | TaskActionModelWithoutPayload ;