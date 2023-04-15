import { Dispatch } from "react";
import { TaskActions, TaskTypes } from "../store/types/task"
import Task from "../models/Task";

export const getIssues = async (dispatch: Dispatch<TaskActions>, url: string) => {
    const response = await fetch(url);

    const responseJSON = await response.json();

    for(let i = 0; i < responseJSON.length; i++){
        let task : Task = {
            id: responseJSON[i].id,
            title: responseJSON[i].title,
            creationDate: responseJSON[i].created_at,
            creator: responseJSON[i].user.login,
            comments: responseJSON[i].comments
        }
        dispatch({
            type: TaskTypes.ADD_TASK,
            payload: task
        });
    }
}