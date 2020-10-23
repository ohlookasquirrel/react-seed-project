import {storiesOf} from "@storybook/react"
import React from "react"
import {Header} from "./Header"

storiesOf(Header.name, module)
    .add("default state", () => <Header/>)
