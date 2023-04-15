import { combineReducers } from "redux";
import { todoReduces } from "./todoReducer";

export const myCombineReducer = combineReducers({
    todo: todoReduces
});

export type RootState = ReturnType<typeof myCombineReducer>;