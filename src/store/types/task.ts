import Task from "../../models/Task";

export enum TaskTypes{
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK"
}

interface AddTaskAction{
    type: TaskTypes.ADD_TASK,
    payload: Task
}

interface DeleteTaskAction{
    type: TaskTypes.DELETE_TASK,
    payload: number
}

export type TaskActions = AddTaskAction | DeleteTaskAction;

export interface TaskState{
    tasks: Task[]
}