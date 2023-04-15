import React from 'react';
import Task from '../models/Task';
import Card from 'react-bootstrap/Card';

const TaskCard: React.FC<{ task: Task }> = (props) => {

    const dragStart = (e: any, id: number) => {
        console.log(123);
        e.dataTransfer.setData("taskId", id);
    }

    return (
        <Card className='mt-3 rounded border border-dark' style={{ width: '18rem' }} draggable onDragStart={e => dragStart(e, props.task.id)}>
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