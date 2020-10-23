import React from "react"
import {SomeView} from "../../../model/view/SomeView"

export interface BodyStateProps {
    readonly title: string
    readonly summary: BodyDispatchProps
    readonly values: ReadonlyArray<SomeView>
}


export interface BodyDispatchProps {
    readonly somethingelse: (id: number) => void
}


export const Body = (props: BodyStateProps & BodyDispatchProps) =>
    <div>
        <LoremTitle onClick="add(">{props.title}</LoremTitle>
        <p>{props.summary}</p>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </div>
    </div>
