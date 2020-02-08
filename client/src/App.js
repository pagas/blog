import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import withAuth from './components/withAuth';
import Home from "./components/main/Home.jsx";
import Secret from "./components/main/Secret";
import Login from "./components/main/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skypey from './components/skypey';
import ToDoApp from './components/todo';

function App() {
    return (
        <div className="App">
            <Router>
                <ul className="d-flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/secret">Secret</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/skypey">skypey</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/secret" component={withAuth(Secret)} />
                    <Route path="/login" component={Login} />
                    <Route path="/skypey" component={Skypey} />
                    <Route path="/todo" component={ToDoApp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
