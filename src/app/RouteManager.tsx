import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Items from "./pages/items/Items"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Items} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
