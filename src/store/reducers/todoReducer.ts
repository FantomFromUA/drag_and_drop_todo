import { TaskState, TaskActions, TaskTypes } from "../types/task";

const initialState: TaskState = {
    tasks: []
}

export const todoReduces = (state = initialState, action: TaskActions) : TaskState => {
    switch(action.type){
        case TaskTypes.ADD_TASK:
            return {tasks: [...state.tasks, action.payload]}
        case TaskTypes.DELETE_TASK:
            return {tasks: state.tasks.filter(task => task.id != action.payload)}
        default:
            return state;
    }
}
