import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Start from './pages/Start';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import { StyledApp, StyledAppBody } from './styles/components';

const App = (): FunctionComponent => {
    return (
        <Router>
            <ThemeProvider theme={mainTheme}>
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
            </ThemeProvider>
        </Router>
    );
};

export default App;
