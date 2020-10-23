import React from "react"
import styled from "styled-components"
import {Style} from "../../../style/variables"
import {FaFortAwesome} from "react-icons/fa"
const HeaderContainer = styled.div`
    background-color: ${Style.color.brand.dark};
    color: rgba(255, 255, 255, 1);
    padding: 1rem 3rem 1rem 1rem;
    height: ${Style.sizing.header.height};
`

const Logo = styled.img`
    height: 3rem;
    width: auto;
    margin-right: 0.5rem;
    vertical-align: bottom;
`

const CurrentAssemblyWrapper = styled.div`
    display: flex;
    align-items: center;
    float: right;
    border-left: 1px solid ${Style.color.brand.light};
    padding-left: 1.5rem;
    height: 100%;
`

export const Header = ()  =>
    <HeaderContainer>
        <CurrentAssemblyWrapper>
            <h5>Blah Blah</h5>
        </CurrentAssemblyWrapper>
        <h3 className="m-0"><Logo><FaFortAwesome></FaFortAwesome></Logo></h3>
    </HeaderContainer>
