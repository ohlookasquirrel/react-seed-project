import {createActionFactory} from "../../util/action-util"

export interface SomethingSelectedAction {
    readonly id: number,
}

export const somethingSelected = createActionFactory<SomethingSelectedAction>("SOMETHING_SELECTED_ACTION")
