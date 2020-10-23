import {objectCreatorFactory} from "../objectCreatorFactory"
import {BackendValue} from "../../../../model/business/BackendValue"

export const createBackendValue = objectCreatorFactory<BackendValue>({
    id: -1,
    value: "",
})
