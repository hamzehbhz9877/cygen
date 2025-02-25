'use client'

import React from 'react';
import Top from "@/layout/header/top";
import Bottom from "@/layout/header/bottom";

// css
import "./header.scss"
import HeaderMobile from "@/layout/header/mobile";
import {usePathname} from "next/navigation";
import {productStore} from "@/state/product/product";

const Header = () => {

    const pathname = usePathname()

    const {productNotFound} = productStore()

    if (pathname !=="/shipping" && pathname !=="/payment" && pathname!=="/cart")
        return (
        <>
            <header className="header">
                <div
                    className={`hidden lg:block ${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'productDetails' : ''}`}>
                    <Top/>
                    <Bottom/>
                </div>
                <div
                    className={`!sm:hidden ${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'productDetails' : ''}`}>
                    <HeaderMobile/>
                </div>

            </header>
        </>
    );
};

export default Header;