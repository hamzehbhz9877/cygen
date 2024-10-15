import React from 'react';
import Top from "@/layout/header/top/index";
import Bottom from "@/layout/header/bottom";

// css
import "./header.scss"

const Header = () => {

    return (
        <header className="header">
            <Top/>
            <Bottom/>
        </header>
    );
};

export default Header;