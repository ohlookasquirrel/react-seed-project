import {BackendValue} from "./BackendValue"

export interface BackendSummary {
    readonly name: string
    readonly summary: string,
    readonly values: ReadonlyArray<BackendValue>
}
