import React from 'react';
import Task from '../models/Task';
import Card from 'react-bootstrap/Card';
import { InProgresTaskTypes } from '../store/types/inProgresTask';
import { TodoTaskTypes } from '../store/types/todoTask';
import { DoneTaskTypes } from '../store/types/doneTask';

const TaskCard: React.FC<{ task: Task, type: InProgresTaskTypes | TodoTaskTypes | DoneTaskTypes}> = (props) => {

    const dragStart = (e: any, id: number) => {
        e.dataTransfer.setData("transferedTask", JSON.stringify(props.task));
        e.dataTransfer.setData("taskType", props.type);
    }

    return (
        <Card className='my-2 rounded border border-dark' style={{ width: '18rem' }} draggable onDragStart={e => dragStart(e, props.task.id)}>
            <Card.Body>
                <Card.Title>{props.task.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">#{props.task.id} opened {0} days ago</Card.Subtitle>
                <Card.Text className="mb-2 text-muted">
                    {props.task.creator} | Comments: {props.task.comments}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default TaskCard;