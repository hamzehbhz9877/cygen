'use client'

import React, {useRef} from 'react';
import Logo from "@/layout/header/top/logo";
import {CgMenuRight} from "react-icons/cg";
import CategoriesMobile from "@/layout/header/mobile/categories";
import useClickOutside from "@/hooks/useOutsideClick";
import Navbar from "@/layout/header/mobile/navbar";
import {RiSearch2Line} from "react-icons/ri";
import useOverlay from "@/context/overlay/useOverlay";
import MenuMobile from "@/layout/header/mobile/menu";
import SearchMobile from "@/layout/header/mobile/search";

const HeaderMobile = () => {

    const {toggleOverlay,isOpen}=useOverlay()
    const clickRef = useRef<HTMLDivElement | null>(null)


    const close=()=>{
        if (document.querySelector(".modal-menu-mobile")?.classList.contains("open")) {
            toggleOverlay(false)
            document.querySelector(".modal-menu-mobile")?.classList.remove('open')
            document.querySelector("body").style.overflow = "auto"
            document.querySelector('.sub-menu.open')?.classList.remove("open")
        }
        if (document.querySelector(".modal-category-mobile")?.classList.contains("open")) {
            toggleOverlay(false)
            document.querySelector(".modal-category-mobile")?.classList.remove('open')
            document.querySelector("body").style.overflow = "auto"
            document.querySelector('.sub-menu.open')?.classList.remove("open")
        }
    }

    const handleOpenMenu = (type) => {
        document.querySelector(type)?.classList.toggle('open')
        toggleOverlay(!isOpen)
        if (document.querySelector("body").style.overflow === "hidden")
            document.querySelector("body").style.overflow = "auto"
        else
            document.querySelector("body").style.overflow = "hidden"
        document.querySelector(`${type} .sub-menu.open`)?.classList.remove("open")
    }

    useClickOutside(clickRef, () => {
       close()
    });

    return (
        <div ref={clickRef}>
            <div className="mobile">
                <CgMenuRight size={26} color={"#5C677D"} className={"cursor-pointer"} onClick={()=>handleOpenMenu(".modal-menu-mobile")}/>
                <Logo/>
                <RiSearch2Line size={26} color={"#424750"} className="cursor-pointer" onClick={()=>document.querySelector(".header__top-search-mobile").classList.add("active")}/>
            </div>
            <hr className="w-[91%] block md:hidden mx-auto  mt-[50px] border-solid border-[#eee]"/>
            <CategoriesMobile closeMenu={()=>handleOpenMenu(".modal-category-mobile")} />
            <MenuMobile/>
            <SearchMobile/>
            <Navbar openMenu={()=>handleOpenMenu(".modal-category-mobile")} />
        </div>
    );
};

export default HeaderMobile;