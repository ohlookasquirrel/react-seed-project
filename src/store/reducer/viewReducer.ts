import {Action} from "redux"

import {isAction} from "../../util/action-util"
import {ViewState} from "../../model/AppState"
import {SomeView} from "../../model/view/SomeView"
import {BackendValue} from "../../model/business/BackendValue"
import {sampleSummaryLoaded} from "../../model/action/SampleSummaryLoadedAction"
import {somethingLoaded} from "../../model/action/SomethingLoadedAction"


export const viewReducer = (priorState: ViewState, action: Action): ViewState => {

    if (isAction(sampleSummaryLoaded, action)) {
        const {summary} = action
        return {
            ...priorState,
            title: summary.name,
            description: summary.summary,
            someArray: summary.values.map(backendValuesToSomeArrayView),
        }
    }

    if (isAction(somethingLoaded, action)) {
        const {something} = action

        return {
            ...priorState,
            somethingDetail: {
                stuff: something.stuff,
            },
        }
    }

    return priorState
}

export const backendValuesToSomeArrayView = (backendValue: BackendValue): SomeView => {
    return {
        id: backendValue.id,
        value: backendValue.value,
    }
}
