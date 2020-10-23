import {createBackendSummary} from "../../../util/test/factory/business/createBackendSummary"
import {viewReducer} from "../viewReducer"
import {BackendSummary} from "../../../model/business/BackendSummary"
import {sampleSummaryLoaded} from "../../../model/action/SampleSummaryLoadedAction"
import {createBackendValue} from "../../../util/test/factory/business/createBackendValue"
import {createViewState} from "../../../util/test/factory/createViewState"

describe(`when sampleSummaryLoaded`, () => {

    it("converts BackendSummary to SampleSummaryView", () => {
        const summary: BackendSummary = createBackendSummary({
            name: "Smerg",
            summary: "Blag",
            values: [
                createBackendValue({
                    id: 5,
                    value: "asdf",
                }),
            ],
        })

        const newState = viewReducer(createViewState(), sampleSummaryLoaded({ summary }))
        expect(newState.title).toMatchSnapshot()
        expect(newState.description).toMatchSnapshot()
        expect(newState.someArray).toMatchSnapshot()
    })

})
