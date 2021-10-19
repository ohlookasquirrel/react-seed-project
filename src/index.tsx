import React from "react"
import ReactDOM from "react-dom"
import {App} from "./component/App"
import "jquery"
import "bootstrap"
import "./style/index.scss"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {rootReducer} from "./store/rootReducer"

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root"),
)
