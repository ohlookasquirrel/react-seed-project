import {call, put} from "redux-saga/effects"
import {loadBackendSummarySaga} from "./rootSaga"
import {retrieveBackendSummary} from "../../repository/AssemblyRepository"
import {createBackendSummary} from "../../util/test/factory/business/createBackendSummary"
import {createBackendValue} from "../../util/test/factory/business/createBackendValue"
import {sampleSummaryLoaded} from "../../model/action/SampleSummaryLoadedAction"
import {BackendSummary} from "../../model/business/BackendSummary"

describe("rootSaga", () => {

    it("loadBackendSummarySaga", () => {
        const saga = loadBackendSummarySaga()

        const summary: BackendSummary = createBackendSummary({
            name: "Luke",
            summary: "Jedi Knight",
            values: [createBackendValue({
                id: 1,
                value: "asdf",
            })],
        })

        expect(saga.next().value).toEqual(call(retrieveBackendSummary))
        expect(saga.next(summary).value).toEqual(put(sampleSummaryLoaded({ summary })))
        expect(saga.next().done).toEqual(true)
    })

})
