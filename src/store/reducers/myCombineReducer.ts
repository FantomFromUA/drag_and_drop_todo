import { combineReducers } from "redux";
import { todoReduces } from "./todoReducer";
import { inProgresReduces } from "./inProgresReducer";
import { doneReduces } from "./doneReducer";

export const myCombineReducer = combineReducers({
    todo: todoReduces,
    inProgres: inProgresReduces,
    done: doneReduces
});

export type RootState = ReturnType<typeof myCombineReducer>;