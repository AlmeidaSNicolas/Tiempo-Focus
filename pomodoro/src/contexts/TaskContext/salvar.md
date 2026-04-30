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