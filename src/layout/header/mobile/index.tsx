'use client'

import React, {useRef} from 'react';
import Logo from "@/layout/header/top/logo";
import {CgMenuRight} from "react-icons/cg";
import {FiPhoneCall} from "react-icons/fi";
import Mobile from "@/components/filters/mobile";
import MenuMobile from "@/layout/header/mobile/menu";
import useClickOutside from "@/hooks/useOutsideClick";

const HeaderMobile = () => {

    const clickRef = useRef<HTMLDivElement | null>(null)

    const handleOpenMenu = () => {
        document.querySelector(".modal-menu")?.classList.toggle('open')
        document.querySelector(".overlay")?.classList.add('navigation')
        document.querySelector('.overlay').classList.toggle("active")
        document.querySelector("body").style.overflow = "hidden"
        document.querySelector('.sub-menu.open')?.classList.remove("open")
    }

    useClickOutside(clickRef, () => {
        if (document.querySelector(".modal-menu")?.classList.contains("open")) {
            document.querySelector('.overlay').classList.remove("active", "navigation")
            document.querySelector(".modal-menu")?.classList.remove('open')
            document.querySelector("body").style.overflow = "auto"
            document.querySelector('.sub-menu.open')?.classList.remove("open")
        }
    });

    return (
        <div ref={clickRef}>
            <div className="mobile">
                <CgMenuRight size={26} color={"#5C677D"} onClick={handleOpenMenu}/>
                <Logo/>
                <FiPhoneCall color={'#424750'} size={25} className="phone cursor-pointer"/>
            </div>
            <hr className="w-[91%] mx-auto  mt-[50px] border-solid border-[#eee]"/>
            <MenuMobile/>
        </div>
    );
};

export default HeaderMobile;