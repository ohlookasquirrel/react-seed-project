import {ViewState} from "../../../model/AppState"
import {objectCreatorFactory} from "./objectCreatorFactory"


export const createViewState = objectCreatorFactory<ViewState>({
    title: "",
    description: "",
    someArray: [],
    somethingDetail: { stuff: ""}, // TODO make this nullable
})
