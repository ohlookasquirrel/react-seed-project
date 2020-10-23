import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../../model/AppState"
import {Body, BodyDispatchProps, BodyStateProps} from "../../presentation/body/Body"
import {somethingSelected} from "../../../model/action/SomethingSelectedAction"

const mapStateToProps: MapStateToProps<BodyStateProps, void, AppState> = state => ({
    title: state.view.title,
    summary: state.view.description,
    values: state.view.someArray,
})

const mapDispatchToProps: MapDispatchToProps<BodyDispatchProps, void> = dispatch => ({
    somethingId: (id: number) => dispatch(somethingSelected({ id })),
})

export const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body)
