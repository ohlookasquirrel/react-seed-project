import React from "react"

export enum NavBarTestHandles {
    BrandName = "NAV_BAR_BRAND_NAME"
}

export interface NavBarProps {
    readonly title: string
}

export const NavBar = ({title}: NavBarProps) =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a
            data-test-handle={NavBarTestHandles.BrandName}
            className="navbar-brand"
            href="#"
        >
            {title}
        </a>
    </nav>
