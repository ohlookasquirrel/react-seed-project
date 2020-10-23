import {storiesOf} from "@storybook/react"
import React from "react"
import {Footer} from "./Footer"

storiesOf(Footer.name, module)
    .add("default state", () => <Footer/>)
