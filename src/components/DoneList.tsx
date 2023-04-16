import * as React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { store } from '../store';
import { getIssues } from '../http/getIssues';
import TaskCard from './TaskCard';
import { DoneTaskTypes } from '../store/types/doneTask';
import Task from '../models/Task';

const DoneList = () => {

    const {doneTasks: tasks} = useTypedSelector(store => store.done);
    const dispatch = store.dispatch;

    const drop = (e: any) => {
        const task: Task = JSON.parse(e.dataTransfer.getData("transferedTask"));

        dispatch({
            type: e.dataTransfer.getData("taskType"),
            payload: task.id
        });
        
        dispatch({
            type: DoneTaskTypes.ADD_DONE_TASK,
            payload: task 
        });
    }

    return (
        <div 
            className='mx-2 square border border-dark d-flex align-items-center flex-column' 
            style={{backgroundColor: "#CED4DA", height: tasks.length > 4 ? "max-content" : "80vh"}}
            onDragOver={e => e.preventDefault()}
            onDrop={e => drop(e)}
        >
            {tasks.map(task => (
                <TaskCard task={task} type={DoneTaskTypes.DELETE_DONE_TASK} key={task.id}/>
            ))}
        </div>
    );
}
 
export default DoneList ;    