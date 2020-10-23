import {all, call, put, take} from "redux-saga/effects"
import {
    retrieveBackendSummary, retrieveSomething,
} from "../../repository/AssemblyRepository"
import {sampleSummaryLoaded} from "../../model/action/SampleSummaryLoadedAction"
import {BackendSummary} from "../../model/business/BackendSummary"
import {somethingSelected, SomethingSelectedAction} from "../../model/action/SomethingSelectedAction"
import {Something} from "../../model/business/Something"
import {somethingLoaded} from "../../model/action/SomethingLoadedAction"

export function* loadBackendSummarySaga() {
    const summary: BackendSummary = yield call(retrieveBackendSummary)
    yield put(sampleSummaryLoaded({ summary }))
}

export function* loadSomethingSaga() {
    while (true) {
        const action: SomethingSelectedAction = yield take(somethingSelected.type)
        const something: Something = yield call(retrieveSomething, action.id)
        yield put(somethingLoaded({ something }))
    }
}

export default function* rootSaga() {
    yield all([
        loadBackendSummarySaga(),
        loadSomethingSaga(),
    ])
}
