import {BackendSummary} from "../../../../model/business/BackendSummary"
import {objectCreatorFactory} from "../objectCreatorFactory"

export const createBackendSummary = objectCreatorFactory<BackendSummary>({
    name: "",
    summary: "",
    values: [],
})
