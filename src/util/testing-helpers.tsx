import ReactDOM from "react-dom"
import React from "react"

export const renderComponent = (Component: any) => {
    const rootElement = document.createElement("DIV")!
    document.body.innerHTML = ""
    document.body.appendChild(rootElement)
    ReactDOM.render(<React.Fragment>{Component}</React.Fragment>,  rootElement)

    return rootElement
}

export const testHandleSelector = (handle: string): string => `[data-test-handle='${handle}']`
export const queryByTestHandle = (handle: string, element: Element) => element.querySelector(testHandleSelector(handle))!
export const queryAllByTestHandle = (handle: string, element: Element) => element.querySelectorAll(testHandleSelector(handle))
