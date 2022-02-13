import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "../Home";

const Routes = props => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
