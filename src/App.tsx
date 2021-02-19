import React from "react"
import { RecoilRoot } from "recoil"
import RouteManager from "./app/RouteManager"

const App = () => {
    return (
        <RecoilRoot>
            <RouteManager />
        </RecoilRoot>
    )
}

export default App
