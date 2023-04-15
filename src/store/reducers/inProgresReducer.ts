import { InProgresTaskActions, InProgresTaskState, InProgresTaskTypes } from "../types/inProgresTask";


const initialState: InProgresTaskState = {
    inProgresTasks: []
}

export const inProgresReduces = (state = initialState, action: InProgresTaskActions) : InProgresTaskState => {
    switch(action.type){
        case InProgresTaskTypes.ADD_IN_PROGRES_TASK:
            return {inProgresTasks: [...state.inProgresTasks, action.payload]}
        case InProgresTaskTypes.DELETE_IN_PROGRES_TASK:
            return {inProgresTasks: state.inProgresTasks.filter(task => task.id !== action.payload)}
        case InProgresTaskTypes.DELETE_ALL:
            return {inProgresTasks: []}
        default:
            return state;
    }
}
