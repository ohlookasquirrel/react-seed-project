import {objectCreatorFactory} from "../objectCreatorFactory"
import {SomeView} from "../../../../model/view/SomeView"


export const createSomeView = objectCreatorFactory<SomeView>({
    id: -1,
    value: "",
})
