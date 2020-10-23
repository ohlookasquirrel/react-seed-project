import React from "react"
import ReactDOM from "react-dom"
import "jquery"
import "bootstrap"

import "./style/index.scss"
import * as serviceWorker from "./serviceWorker"
import {initializeStore} from "./store/store"
import {Provider} from "react-redux"
import {BodyContainer} from "./component/container/body/BodyContainer"

ReactDOM.render(
    <Provider store={initializeStore()}>
        <BodyContainer/>
    </Provider>,
    document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
