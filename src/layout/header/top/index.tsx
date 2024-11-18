import React from 'react';
import Search from "@/layout/header/top/search";
import Logo from "@/layout/header/top/logo";
import {FiPhoneCall} from "react-icons/fi";
import Account from "@/layout/header/top/account";
import {PiShoppingCartSimpleLight} from "react-icons/pi";
import Banner  from "@/components/banner";


const Top = () => {
    return (
        <>
            <Banner PositionSystemName={"header_before"}/>
            <div className="header__top container">
                <div className="flex items-center ">
                    <Logo/>
                    <Search/>
                </div>
                <div className="flex items-center">
                    <FiPhoneCall color={'#424750'} size={25} className="phone cursor-pointer"/>
                    <i className="line-account"></i>
                    <Account/>
                    <i className="line-account"></i>
                    <div className="shopping-cart cursor-pointer" title="cart">
                        <PiShoppingCartSimpleLight size={28} color={'#424750'}/>
                        <em className="rounded-full">0</em>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Top;