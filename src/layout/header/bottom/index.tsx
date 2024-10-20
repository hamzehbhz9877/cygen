'use client'

import React, {useEffect, useRef} from 'react';

import Link from "next/link";
import {RiHome5Fill} from "react-icons/ri";
import {IoIosArrowDown} from "react-icons/io";

import Image from "next/image";
import UseAnimatedNavigation from "@/hooks/useAnimatedNavigation";
import MegaMenu from "@/layout/header/bottom/megaMenu/megaMenu";
import UseScrollDetection from "@/hooks/scrollDetection";
import Menu from "@/layout/header/bottom/menu/menu";

const Bottom = () => {



    const menuRef = useRef<HTMLUListElement | null>(null)
    const borLineRef = useRef<HTMLDivElement | null>(null)
    const stickyRef = useRef<HTMLDivElement | null>(null)


    const down=()=> {
        document.querySelector(".header")?.classList.add("sticky")
        stickyRef.current?.classList.add("sticky")
    }
    const up=()=> {
        document.querySelector(".header")?.classList.remove("sticky")
        stickyRef.current?.classList.remove("sticky")
    }


    UseScrollDetection(up,down)

    UseAnimatedNavigation(menuRef, borLineRef,'li.header__bottom-list-item')


    return (
        <div className="header__bottom" ref={stickyRef}>
            <div className="container nav">
                <ul className="header__bottom-list relative" ref={menuRef}>
                    <MegaMenu/>
                    <div className="menu-line"></div>
                    <li className="header__bottom-list-item">
                        <Link href={"/"}>
                            <RiHome5Fill size={18}/>
                            <span>صفحه اصلی</span>
                        </Link>
                    </li>
                    <Menu/>
                    <li className="header__bottom-list-item">
                        <Link href={"/"}>
                            <RiHome5Fill size={18}/>
                            <span>سوالی دارید؟</span>
                        </Link>
                    </li>
                    <div className="bor-line" ref={borLineRef}/>
                </ul>

                <div className="page-promotes">
                    <ul>
                        <li>
                            <Link href={"/"}>
                                فروش ویژه
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Bottom;