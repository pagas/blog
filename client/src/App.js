import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import withAuth from './components/withAuth';
import Home from "./components/main/Home.jsx";
import Secret from "./components/main/Secret";
import Login from "./components/main/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import {Col, Row, Container} from 'react-bootstrap'

function App() {
    return (
        <div className="App">
            <h1>The main app is here</h1>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/secret">Secret</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/secret" component={withAuth(Secret)} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>

            <Container>
                <Row className="row">
                    <Col xs={12}>
                        <h1>To Do List</h1>
                        <AddToDo/>
                        <ToDoListContainer />
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default App;
