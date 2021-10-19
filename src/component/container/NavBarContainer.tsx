import {connect, MapStateToProps} from "react-redux"
import {NavBar, NavBarProps} from "../presentation/NavBar"
import {AppState} from "../../model/AppState"

const mapStateToProps: MapStateToProps<NavBarProps, {},  AppState> = state => ({
    title: state.title
})

export const NavBarContainer = connect(mapStateToProps)(NavBar)
