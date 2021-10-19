import {AppState} from "../model/AppState"
import {defaultState} from "./defaultState"
import {Action} from "redux"

export const rootReducer = (previousState: AppState = defaultState, action: Action): AppState => ({
    ...previousState,
})
