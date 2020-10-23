import {viewReducer} from "../viewReducer"
import {createSomething} from "../../../util/test/factory/business/createSomething"
import {Something} from "../../../model/business/Something"
import {somethingLoaded} from "../../../model/action/SomethingLoadedAction"
import {createViewState} from "../../../util/test/factory/createViewState"

describe(`when somethingLoaded`, () => {

    it("converts Something to SomethingDetailView", () => {
        const something: Something = createSomething({
            stuff: "moar details",
        })

        const newState = viewReducer(createViewState(), somethingLoaded({ something }))
        expect(newState.somethingDetail).toMatchSnapshot()
    })

})
