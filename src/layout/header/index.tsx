'use client'

import React from 'react';
import Top from "@/layout/header/top";
import Bottom from "@/layout/header/bottom";

// css
import "./header.scss"
import HeaderMobile from "@/layout/header/mobile";
import {usePathname} from "next/navigation";
import ProductMobileHeader from "@/layout/header/mobile/productDetails/productMobileHeader";
import More from "@/layout/header/mobile/productDetails/more";
import Addtocart from "@/layout/header/mobile/addtocart";
import {productStore} from "@/state/product/product";
import product from "@/components/product/loader/product";

const Header = () => {

    const pathname=usePathname()

    const {productNotFound} = productStore()

    return (
        <>
            <header className="header">
                <div className={`hidden lg:block ${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'productDetails' : ''}`}>
                    <Top/>
                    <Bottom/>
                </div>
                <div className={`!sm:hidden ${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'productDetails' : ''}`}>
                    <HeaderMobile/>
                </div>

            </header>
        </>
    );
};

export default Header;