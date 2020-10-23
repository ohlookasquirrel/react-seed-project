import {createActionFactory} from "../../util/action-util"
import {Something} from "../business/Something"

export interface SomethingLoadedAction {
    readonly something: Something,
}

export const somethingLoaded = createActionFactory<SomethingLoadedAction>("SAMPLE_SUMMARY_LOADED_ACTION")
