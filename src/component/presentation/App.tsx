import React from "react"
import styled from "styled-components"

import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import {Style} from "../../style/variables"
import {BodyContainer} from "../container/body/BodyContainer"

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: ${Style.sizing.header.height};
`

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
`

const BodyWrapper = styled.div`
    background-color: white;
`

export const App = () =>
    <div>
        <HeaderWrapper>
            <Header />
        </HeaderWrapper>
        <BodyWrapper>
            <BodyContainer />
        </BodyWrapper>
        <FooterWrapper>
            <Footer />
        </FooterWrapper>
    </div>
