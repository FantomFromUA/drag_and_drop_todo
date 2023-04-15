import Task from "../../models/Task";

export enum DoneTaskTypes{
    ADD_DONE_TASK = "ADD_DONE_TASK",
    DELETE_DONE_TASK = "DELETE_DONE_TASK",
    DELETE_ALL = "DELETE_ALL"
}

interface AddDoneTaskAction{
    type: DoneTaskTypes.ADD_DONE_TASK,
    payload: Task
}

interface DeleteDoneTaskAction{
    type: DoneTaskTypes.DELETE_DONE_TASK,
    payload: number
}

interface DeleteAllDoneTasksAction{
    type: DoneTaskTypes.DELETE_ALL
}

export type DoneTaskActions = AddDoneTaskAction | DeleteDoneTaskAction | DeleteAllDoneTasksAction;

export interface DoneTaskState{
    doneTasks: Task[]
}