import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

const App = () => {
    return(
        <div className="app-container">
            <div className="app-wrapper">
                <Router>
                    <Switch>
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/dashboard" component={Dashboard} ></Route>
                        <Route exact path="/" component={Login}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;