import { Dispatch } from "react";
import { TodoTaskActions, TodoTaskTypes } from "../store/types/todoTask"
import Task from "../models/Task";

export const getIssues = async (dispatch: Dispatch<TodoTaskActions>, url: string) => {
    const response = await fetch(url);
    console.log(response);
    
    const responseJSON = await response.json().catch(() => {
        alert("No issues found in this repo");
        return;
    });

    for(let i = 0; i < responseJSON.length; i++){
        let task : Task = {
            id: responseJSON[i].id,
            title: responseJSON[i].title,
            creationDate: responseJSON[i].created_at,
            creator: responseJSON[i].user.login,
            comments: responseJSON[i].comments
        }
        dispatch({
            type: TodoTaskTypes.ADD_TODO_TASK,
            payload: task
        });
    }
}