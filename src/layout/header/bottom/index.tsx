'use client'

import React, {useEffect, useRef} from 'react';

import Link from "next/link";
import UseAnimatedNavigation from "@/hooks/useAnimatedNavigation";
import MegaMenu from "@/layout/header/bottom/megaMenu/megaMenu";
import UseScrollDetection from "@/hooks/scrollDetection";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicLinkPositionsQuery, GetDynamicLinks} from "@/services/DynamicLink";
import Image from "next/image";
import Menu from "@/layout/header/bottom/menu/menu";
import {GetSiteSettingsQuery} from "@/services/Common";

const Bottom = () => {


    const {data} = useSuspenseQuery(GetDynamicLinkPositionsQuery)

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


    UseAnimatedNavigation(menuRef, borLineRef, 'li.header__bottom-list-item',[])


    return (
        <div className="header__bottom" ref={stickyRef}>
            <div className="container nav">
                <ul className="header__bottom-list relative" ref={menuRef}>
                    <MegaMenu/>
                    <div className="menu-line"></div>

                    {data?.find(d=>d.key===10)?.data?.map(d => {
                        return (
                            <li key={d.Id} className="header__bottom-list-item">
                                <Link href={d.Url} target={d.OpenInNewPage}>
                                    {d.Icon ?
                                        <Image className={""} alt={d.Name} src={d.Name} width={18} height={18}/> : ""}
                                    <span>{d.Name}</span>
                                </Link>
                                {/*<Menu/>*/}
                            </li>
                        )
                    })}
                    <div className="bor-line" ref={borLineRef}/>
                </ul>

                <div className="page-promotes">

                    <ul>
                        {
                            data?.find(d=>d.key===11).data.map(d=>{
                                return (
                                    <li key={d.Id}>
                                        <Link href={d.Url}>
                                            {d.Icon ?
                                                <Image className={""} alt={d.Name} src={d.Name} width={18} height={18}/> : ""}
                                            {d.Name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Bottom;