import React from "react";
import './App.css';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import Grid from '@material-ui/core/Grid';
import DetailPage from './components/DetailPage';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
        <Router>
            <div className={"App"}>
                <Navbar/>
                <Grid className={"main-container"} container justify={"center"} alignItems={"center"}>
                    <Switch>
                        <Route exact path="/" >
                            <SearchPage />
                        </Route>
                        <Route path="/results">
                            <ResultsPage />
                        </Route>
                        <Route path="/detail/:id">
                            <DetailPage />
                        </Route>
                    </Switch>
                </Grid>
            </div>
        </Router>
    );
}

export default App;
