import { TodoTaskState, TodoTaskActions, TodoTaskTypes } from "../types/todoTask";

const initialState: TodoTaskState = {
    todoTasks: []
}

export const todoReduces = (state = initialState, action: TodoTaskActions) : TodoTaskState => {
    switch(action.type){
        case TodoTaskTypes.ADD_TODO_TASK:
            return {todoTasks: [...state.todoTasks, action.payload]}
        case TodoTaskTypes.DELETE_TODO_TASK:
            return {todoTasks: state.todoTasks.filter(task => task.id != action.payload)}
        default:
            return state;
    }
}
