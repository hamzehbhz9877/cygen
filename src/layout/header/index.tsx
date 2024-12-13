

import React from 'react';
import Top from "@/layout/header/top/index";
import Bottom from "@/layout/header/bottom";

// css
import "./header.scss"
import HeaderMobile from "@/layout/header/mobile";
import {usePathname} from "next/navigation";
import ProductMobileHeader from "@/layout/header/mobile/productMobileHeader";

const Header = ({path}:any) => {


    return (
        <>
            <header className="header">
                <div className={`hidden md:block ${path ? 'productDetails' : ''}`}>
                    <Top/>
                    <Bottom/>
                </div>
                <div className={`block !md:hidden ${path ? 'productDetails' : ''}`}>
                    <HeaderMobile/>
                </div>
                <div className={`header ${path ? 'productDetails-header' : ''}`}>
                    <ProductMobileHeader/>
                </div>
            </header>
        </>

    );
};

export default Header;