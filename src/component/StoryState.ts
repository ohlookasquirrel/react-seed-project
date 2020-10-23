import {AppState} from "../model/AppState"

export const STORY_STATE: AppState = {
    view: {
        title: "I'm a title",
        description: "I'm a description",
        someArray: [{
           id: 1,
           value: "value",
        }],
        somethingDetail: {
            stuff: "stuff is here",
        },
    },
}
