import Task from "../../models/Task";

export enum InProgresTaskTypes{
    ADD_IN_PROGRES_TASK = "ADD_IN_PROGRES_TASK",
    DELETE_IN_PROGRES_TASK = "DELETE_IN_PROGRES_TASK",
    DELETE_ALL = "DELETE_ALL"
}

interface AddInProgresTaskAction{
    type: InProgresTaskTypes.ADD_IN_PROGRES_TASK,
    payload: Task
}

interface DeleteInProgresTaskAction{
    type: InProgresTaskTypes.DELETE_IN_PROGRES_TASK,
    payload: number
}

interface DeleteAllInProgresTasksAction{
    type: InProgresTaskTypes.DELETE_ALL
}

export type InProgresTaskActions = AddInProgresTaskAction | DeleteInProgresTaskAction | DeleteAllInProgresTasksAction;

export interface InProgresTaskState{
    inProgresTasks: Task[]
}