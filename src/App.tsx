import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Start from './pages/Start';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import { StyledApp, StyledAppBody } from './styles/components';

/**
 * Root application component.
 *
 * @returns {ReactElement} Global React Application
 */
const App = (): ReactElement => {
    return (
        <ThemeProvider theme={mainTheme}>
            <StyledApp>
                <StyledAppBody>
                    <Router>
                        <Switch>
                            <Route exact path="/start">
                                <Start />
                            </Route>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Router>
                </StyledAppBody>
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
