import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from "./components/main/Home.jsx";
import Secret from "./components/main/Secret";

function App() {
    return (
        <div className="App">
            <h1>The main app is here</h1>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/secret">Secret</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/secret" component={Secret} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
