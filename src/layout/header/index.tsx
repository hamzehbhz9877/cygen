import React from 'react';
import Top from "@/layout/header/top/index";
import Bottom from "@/layout/header/bottom";

// css
import "./header.scss"
import HeaderMobile from "@/layout/header/mobile";
import Navbar from "@/layout/header/mobile/navbar";

const Header = () => {


    return (
        <>
            <header className="header">
                <div className="hidden lg:block">
                    <Top/>
                    <Bottom/>
                </div>
                <div className="block lg:hidden ">
                  <HeaderMobile/>
                </div>
            </header>
        </>

    );
};

export default Header;