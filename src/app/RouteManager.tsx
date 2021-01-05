import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemList from "./pages/item/ItemList"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ItemList} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}

export default RouteManager
