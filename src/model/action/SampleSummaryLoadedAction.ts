import {createActionFactory} from "../../util/action-util"
import {BackendSummary} from "../business/BackendSummary"

export interface SampleSummaryLoadedAction {
    readonly summary: BackendSummary,
}

export const sampleSummaryLoaded = createActionFactory<SampleSummaryLoadedAction>("SAMPLE_SUMMARY_LOADED_ACTION")
