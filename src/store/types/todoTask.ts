import Task from "../../models/Task";

export enum TodoTaskTypes{
    ADD_TODO_TASK = "ADD_TODO_TASK",
    DELETE_TODO_TASK = "DELETE_TODO_TASK",
}

interface AddTodoTaskAction{
    type: TodoTaskTypes.ADD_TODO_TASK,
    payload: Task
}

interface DeleteTodoTaskAction{
    type: TodoTaskTypes.DELETE_TODO_TASK,
    payload: number
}

export type TodoTaskActions = AddTodoTaskAction | DeleteTodoTaskAction;

export interface TodoTaskState{
    todoTasks: Task[]
}