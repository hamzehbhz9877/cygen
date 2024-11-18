import React from 'react';
import Link from "next/link";
import {FaAngleLeft, FaArrowRight} from "react-icons/fa6";
import {TbCategory2} from "react-icons/tb";

const MenuMobile = () => {
    return (
        <nav  className="modal-menu modal-menu-mobile modern modern-menu" >
            <div className="off-canvas-main">
                <div className="menu-mobile-menu-container">
                    <ul id="menu-mobile-menu" className="menu">
                        <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                            <Link href="/">
                                <TbCategory2 size={24} color={"#162C5B"}/>
                                تستس</Link></li>
                        <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                            <Link href="/">
                                <TbCategory2 size={24} color={"#162C5B"}/>
                                تست</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuMobile;