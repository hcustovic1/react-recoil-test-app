import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Start from './pages/Start';
import styled from 'styled-components';

function App() {
    const StyledApp = styled.div`
        text-align: center;
    `;

    const StyledAppBody = styled.header`
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `;

    return (
        <Router>
            <StyledApp>
                <StyledAppBody>
                    <Route exact path="/start">
                        <Start />
                    </Route>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                </StyledAppBody>
                <Switch></Switch>
            </StyledApp>
        </Router>
    );
}

export default App;
