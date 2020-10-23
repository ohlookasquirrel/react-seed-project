import {AppState} from "../../../model/AppState"
import {objectCreatorFactory} from "./objectCreatorFactory"
import {createViewState} from "./createViewState"


export const createAppState = objectCreatorFactory<AppState>({
    view: createViewState(),
})

