'use client'

import React, {useEffect, useRef, useState} from 'react';

import Link from "next/link";
import UseAnimatedNavigation from "@/hooks/useAnimatedNavigation";
import MegaMenu from "@/layout/header/bottom/megaMenu/megaMenu";
import UseScrollDetection from "@/hooks/scrollDetection";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicLinkPositionsQuery, GetDynamicLinks} from "@/services/DynamicLink";
import Image from "next/image";
import Menu from "@/layout/header/bottom/menu/menu";
import {GetSiteSettingsQuery} from "@/services/Common";
import {findKey} from "@/helpers/client";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import RightMenu from "@/layout/header/bottom/rightMenu";
import TopMenu from "@/layout/header/bottom/topMenu";
import DynamicLink from "@/layout/header/bottom/dynamicLink";

const Bottom = () => {


    const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)

    const menuRef = useRef<HTMLUListElement | null>(null)
    const borLineRef = useRef<HTMLDivElement | null>(null)
    const stickyRef = useRef<HTMLDivElement | null>(null)


    const down = () => {
        document.querySelector(".header")?.classList.add("sticky")
        stickyRef.current?.classList.add("sticky")
    }

    const up = () => {
        document.querySelector(".header")?.classList.remove("sticky")
        stickyRef.current?.classList.remove("sticky")
    }


    UseScrollDetection(up, down)


    UseAnimatedNavigation(menuRef, borLineRef, 'li.header__bottom-list-item', [])


    return (
        <div className="header__bottom" ref={stickyRef}>
            <div className="container nav">
                <ul className="header__bottom-list relative" ref={menuRef}>
                    <MegaMenu/>
                    <div className="menu-line"></div>
                    {setting.TopMenu.DisplayHomepageMenuItem ?
                        <li className="header__bottom-list-item">
                            <Link href={"/"}>
                                <span>خانه</span>
                            </Link>
                        </li>
                        : ""}
                    <RightMenu/>
                    <TopMenu/>
                    <div className="bor-line" ref={borLineRef}/>
                </ul>


                <DynamicLink/>
            </div>


        </div>
    );
};

export default Bottom;