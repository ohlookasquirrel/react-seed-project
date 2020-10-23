import React from "react"
import renderer from "react-test-renderer"
import {Provider} from "react-redux"
import {
    mockStateStore,
} from "../../../util/test/container-testing"
import {STORY_STATE} from "../../StoryState"
import {BodyContainer} from "./BodyContainer"


describe(BodyContainer.name, () => {

    it("renders the same", () => {
        const tree = renderer
            .create(<Provider store={mockStateStore(STORY_STATE)}><BodyContainer/></Provider>)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    // TODO create this test
    // it("when the close button is clicked dispatches a close assembly detail action", () => {
    //     const state: AppState = createAppState({
    //         view: createViewState({
    //             assemblyDetail: createAssemblyDetailView(),
    //         }),
    //     })
    //
    //     const { mockStore, rootElement } = renderComponentWithState(AssemblyDetailContainer, state)
    //     trigger("click", queryByTestHandle(AssemblyDetailTestHandles.CloseButton, rootElement))
    //
    //     expect(mockStore.getActions()).toEqual([closeAssemblyDetailsAction()])
    // })

})
