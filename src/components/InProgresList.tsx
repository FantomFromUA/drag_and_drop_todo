import * as React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { store } from '../store';
import { getIssues } from '../http/getIssues';
import TaskCard from './TaskCard';
import Task from '../models/Task';
import { InProgresTaskTypes } from '../store/types/inProgresTask';

const InProgresList = () => {

    const {inProgresTasks: inProgresTasks} = useTypedSelector(store => store.inProgres);
    const dispatch = store.dispatch;

    const drop = (e: any) => {
        const task: Task = JSON.parse(e.dataTransfer.getData("transferedTask"));

        dispatch({
            type: e.dataTransfer.getData("taskType"),
            payload: task.id
        });
        
        dispatch({
            type: InProgresTaskTypes.ADD_IN_PROGRES_TASK,
            payload: task 
        });
    }

    return (
        <div 
            className='mx-2 square border border-dark d-flex align-items-center flex-column' 
            style={{backgroundColor: "#CED4DA", height: inProgresTasks.length > 4 ? "max-content" : "80vh"}}
            onDragOver={e => e.preventDefault()}
            onDrop={e => drop(e)}
        >
            {inProgresTasks.map(task => (
                <TaskCard task={task} type={InProgresTaskTypes.DELETE_IN_PROGRES_TASK} key={task.id}/>
            ))}
        </div>
    );
}
 
export default InProgresList ;    