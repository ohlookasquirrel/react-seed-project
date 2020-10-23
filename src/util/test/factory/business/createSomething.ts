import {objectCreatorFactory} from "../objectCreatorFactory"
import {Something} from "../../../../model/business/Something"

export const createSomething = objectCreatorFactory<Something>({
    stuff: "",
})
