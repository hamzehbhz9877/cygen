'use client'

import React, {useEffect} from 'react';
import {TbCategory2} from "react-icons/tb";
import {FaArrowRight} from "react-icons/fa6";
import {FaAngleLeft} from "react-icons/fa6";


// css
import "./index.scss"
import Link from "next/link";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const CategoriesMobile = ({closeMenu}:any) => {

    const {data} = useSuspenseQuery(GetSiteSettingsQuery)

    useEffect(() => {
        const subMenu = document.querySelectorAll('.toggle-submenu')
        subMenu.forEach(e => {
            e.addEventListener("click", (openMenu) => {
                openMenu.stopPropagation()
                const menu = e.previousElementSibling;
                menu.classList.add("open")
                const closeMenu = menu.querySelector('.close-submenu')
                closeMenu.addEventListener("click", (close) => {
                    close.stopPropagation()
                    menu.classList.remove("open")
                })
            })
        })
    }, [])


    return (
        <nav  className="modal-menu modal-category-mobile modern modern-menu">
            <div className="off-canvas-main">
                <div className="menu-mobile-menu-container">
                    <ul id="menu-mobile-menu" className="menu">
                                {
                                    data?.TopMenu.Categories?.map(({Name, Id, SubCategories, SeName}: any, index) => {
                                        return (
                                            <li key={index} className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children">
                                                <Link onClick={closeMenu} href={`/category/${SeName}`}>{Name}</Link>
                                                <ul className={"sub-menu"}>
                                                    <span className="close-submenu">
                                    <FaArrowRight className="!ml-[8px]"/>{Name}</span>
                                                    {
                                                        SubCategories.length > 0 ? SubCategories?.map((e, index) => {
                                                            return (
                                                                <li id="navi" key={index}
                                                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-menu-item menu-item-3842">
                                                                    <Link onClick={closeMenu} href={"/category/" + e.SeName}
                                                                          aria-current="page">{e.Name}</Link>
                                                                    <ul className={"sub-menu"}>
                                                    <span className="close-submenu">
                                    <FaArrowRight className="!ml-[8px]"/>{e.Name}</span>
                                                                        {
                                                                            e.SubCategories.length > 0 ? e.SubCategories?.map((e, index) => {
                                                                                return (
                                                                                    <li id="navi" key={index}
                                                                                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-menu-item menu-item-3842">
                                                                                        <Link onClick={closeMenu}
                                                                                            href={"/category/" + e.SeName}
                                                                                            aria-current="page">{e.Name}</Link>
                                                                                    </li>
                                                                                )
                                                                            }) : ""
                                                                        }
                                                                    </ul>
                                                                    {e.SubCategories.length > 0 ?
                                                                        <span
                                                                            className="toggle-submenu opened"><FaAngleLeft
                                                                            size={16}
                                                                            toggle-submenu
                                                                            color={"#777"}
                                                                            className={"!ml-0"}/></span> : ""}
                                                                </li>
                                                            )
                                                        }) : ""
                                                    }
                                                </ul>
                                                {SubCategories.length > 0 ?
                                                    <span className="toggle-submenu opened"><FaAngleLeft size={16}
                                                                                                         toggle-submenu
                                                                                                         color={"#777"}
                                                                                                         className={"!ml-0"}/></span> : ""}
                                            </li>
                                        )
                                    })
                                }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default CategoriesMobile;