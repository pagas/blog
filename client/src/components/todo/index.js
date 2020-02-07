import {Container, Row, Col} from 'react-bootstrap';
import AddToDo from '../../containers/todo/AddToDo';
import ToDoListContainer from '../../containers/todo/ToDoListContainer';
import React from 'react';

const ToDoApp = () => (
    <Container>
        <Row className="row">
            <Col xs={12}>
                <h1>To Do List</h1>
                <AddToDo/>
                <ToDoListContainer/>
            </Col>
        </Row>
    </Container>
);

export default ToDoApp;