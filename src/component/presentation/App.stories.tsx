import {storiesOf} from "@storybook/react"
import React from "react"
import {App} from "./App"
import {Provider} from "react-redux"
import {STORY_STATE} from "../StoryState"
import {mockStateStore} from "../../util/test/container-testing"

storiesOf(App.name, module)
    .add("default", () => <Provider store={mockStateStore(STORY_STATE)}><App/></Provider>)
