import {SomeView} from "./view/SomeView"
import {SomethingDetailView} from "./view/SomethingDetailView"

export interface AppState {
    readonly view: ViewState
}

export interface ViewState  {
    readonly title: string,
    readonly description: string,
    readonly someArray: ReadonlyArray<SomeView>,
    readonly somethingDetail: SomethingDetailView,
}
