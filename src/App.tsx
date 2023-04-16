import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoList from './components/TodoList';
import Button from 'react-bootstrap/Button';
import { store } from './store';
import { getIssues } from './http/getIssues';
import InProgresList from './components/InProgresList';
import DoneList from './components/DoneList';
import { InProgresTaskTypes } from './store/types/inProgresTask';
import { DoneTaskTypes } from './store/types/doneTask';

function App() {

  const [url, setUrl] = useState('');
  const dispatch = store.dispatch;

  const setIssues = () => {
    if(url === ''){
      alert("enter url please!")
      return;
    }

    getIssues(dispatch, url);
    dispatch({
      type: InProgresTaskTypes.DELETE_ALL
    });
    dispatch({
      type: DoneTaskTypes.DELETE_ALL
    })
  }

  return (
    <div>
      <Container>
        <Row className='mb-5 mt-2'>
          <Col xs={10}>
            <input 
              type="text" 
              value={url} 
              onChange={e => setUrl(e.target.value)} 
              placeholder='Enter Repo url'
              style={{width: "100%"}}
            />
          </Col>
          <Col>
            <Button variant="outline-dark" onClick={setIssues}>Load issues</Button>
          </Col>
        </Row>
        <Row>
          <Col><p style={{ textAlign: "center" }}><b>ToDo</b></p></Col>
          <Col><p style={{ textAlign: "center" }}><b>In Progress</b></p></Col>
          <Col><p style={{ textAlign: "center" }}><b>Done</b></p></Col>
        </Row>
        <Row>
          <Col>
            <TodoList />
          </Col>
          <Col>
            <InProgresList/>
          </Col>
          <Col>
            <DoneList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
