import React from "react"
import styled from "styled-components"
import {Style} from "../../../style/variables"
import {FaChartBar} from "react-icons/fa"


const FooterContainer = styled.div`
    background-color: ${Style.color.brand.lightest};
    padding: 1rem 3rem 1rem 3rem;
    height: ${Style.sizing.footer.height};
`

const ChartIcon = styled.div`
    float: right;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    width: 3rem;
    height: 2rem;
    text-align: center;
    cursor: pointer;
    background-color: ${Style.color.brand.highlight};
    color: ${Style.color.brand.background};
    box-shadow: 2px 3px 3px #ccc;
`

export const Footer = ()  =>
    <FooterContainer>
        <ChartIcon data-toggle="modal" data-target="#barGraphModal">
            <FaChartBar/>
        </ChartIcon>
    </FooterContainer>
