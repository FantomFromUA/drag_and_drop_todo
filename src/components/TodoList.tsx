import * as React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { store } from '../store';
import { getIssues } from '../http/getIssues';
import TaskCard from './TaskCard';

const TodoList = () => {

    const {tasks} = useTypedSelector(store => store.todo);
    const dispatch = store.dispatch;

    return (
        <div className='mx-2 square border border-dark d-flex align-items-center flex-column' style={{backgroundColor: "#CED4DA", height: "93vh"}}>
            {tasks.map(task => (
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    );
}
 
export default TodoList;    