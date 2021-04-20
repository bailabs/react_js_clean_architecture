import React from "react"
import { Provider } from "react-redux"

import { store } from "./app/redux/store"
import RouteManager from "./app/RouteManager"

// Setup Redux store with Thunks
// const reducers = combineReducers({ items })
// const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <RouteManager />
        </Provider>
    )
}

export default App
