import { DoneTaskActions, DoneTaskState, DoneTaskTypes } from "../types/doneTask";

const initialState: DoneTaskState = {
    doneTasks: []
}

export const doneReduces = (state = initialState, action: DoneTaskActions) : DoneTaskState => {
    switch(action.type){
        case DoneTaskTypes.ADD_DONE_TASK:
            return {doneTasks: [...state.doneTasks, action.payload]}
        case DoneTaskTypes.DELETE_DONE_TASK:
            return {doneTasks: state.doneTasks.filter(task => task.id !== action.payload)}
        case DoneTaskTypes.DELETE_ALL:
            return{doneTasks: []}
        default:
            return state;
    }
}
