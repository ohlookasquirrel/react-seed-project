import React from "react"
import {expect} from "chai"
import {NavBar, NavBarTestHandles} from "./NavBar"
import {queryByTestHandle, renderComponent} from "../../util/testing-helpers"

describe("Header", () => {
    it("Has Sample App in the header", () => {
        const element = renderComponent(<NavBar title={"Sample App"}/>)
        expect(queryByTestHandle(NavBarTestHandles.BrandName, element).textContent).to.equal("Sample App")
    })
})
