import {createBackendSummary} from "../util/test/factory/business/createBackendSummary"
import {createBackendValue} from "../util/test/factory/business/createBackendValue"
import {BackendSummary} from "../model/business/BackendSummary"
import {Something} from "../model/business/Something"

export const retrieveBackendSummary = (): Promise<BackendSummary> => {
    return Promise.resolve(backendSummary)
}

export const retrieveSomething = (id: number): Promise<Something> => {
    return Promise.resolve({stuff: "stuff-" + id})
}

const backendSummary = createBackendSummary({
    name: "Luke",
    summary: "Jedi Knight",
    values: [createBackendValue({
        id: 1,
        value: "asdf",
    })],
})

