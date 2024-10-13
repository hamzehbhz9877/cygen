'use client'

import React, {useEffect, useRef} from 'react';

import {MdOutlineMenu} from "react-icons/md";
import Link from "next/link";
import {RiHome5Fill} from "react-icons/ri";
import {IoIosArrowDown} from "react-icons/io";

import Image from "next/image";
import UseAnimatedNavigation from "@/hooks/useAnimatedNavigation";
import MegaMenu from "@/layout/header/bottom/megaMenu";

const Bottom = () => {


    const menuRef = useRef<HTMLUListElement | null>(null)
    const borLineRef = useRef<HTMLDivElement | null>(null)

    UseAnimatedNavigation(menuRef,borLineRef)

    return (
        <div className="header__bottom ">
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
                    <li className="header__bottom-list-item">
                        <Link href={"/"}>
                            <Image alt={"image-icon-menu"}
                                   src="https://pars.parskalas.com/wp-content/uploads/2022/10/store.png" width={18}
                                   height={18}/>
                            <span className="flex items-center gap-[5px]">
                        <span>لیست کالا ها</span>
                        <IoIosArrowDown size={10}/>

                        </span>
                        </Link>
                    </li>
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