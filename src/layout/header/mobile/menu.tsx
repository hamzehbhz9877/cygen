import React, {useEffect} from 'react';
import {TbCategory2} from "react-icons/tb";
import {FaArrowRight} from "react-icons/fa6";
import {FaAngleLeft} from "react-icons/fa6";


// css
import "./index.scss"
import Link from "next/link";

const MenuMobile = () => {


    useEffect(() => {
        const subMenu = document.querySelectorAll('.toggle-submenu')
        subMenu.forEach(e => {
            e.addEventListener("click", (openMenu) => {
                openMenu.stopPropagation()
                const menu = e.previousElementSibling;
                const closeMenu=menu.querySelector('.close-submenu')
                menu.classList.add("open")
                closeMenu.addEventListener("click",(close)=>{
                    close.stopPropagation()
                    menu.classList.remove("open")
                })
            })
        })
    }, [])


    return (
        <nav id="mobile-menu1" className="modal-menu modern modern-menu">
            <div className="off-canvas-main">
                <div className="menu-mobile-menu-container">
                    <ul id="menu-mobile-menu" className="menu">
                        <li id="navi"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3839">
                            <Link href="/">
                                <TbCategory2 size={24} color={"#162C5B"}/>
                                خانه</Link></li>
                        <li id="navi"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3840">
                            <Link href="/">
                            <TbCategory2 size={24} color={"#162C5B"}/>

                            دسته بندی
                            محصولات</Link></li>
                        <li id="navi"
                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-3841">
                            <Link href="#"> <TbCategory2 size={24} color={"#162C5B"}/>محصولات</Link>
                            <ul className="sub-menu">
                                <span className="close-submenu">
                                    <FaArrowRight className="!ml-[8px]"/>
                                    محصولات</span>
                                <li id="navi"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat current-menu-item menu-item-3842">
                                    <Link href="/"
                                          aria-current="page">کالای دیجیتال</Link></li>
                                <li id="navi"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3843">
                                    <Link href="/">لوازم
                                        خانگی</Link></li>
                                <li id="navi"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3844">
                                    <Link href="/">خودرو
                                        ولوازم</Link></li>
                            </ul>
                            <span className="toggle-submenu opened">
<FaAngleLeft size={16} color={"#777"} className={"!ml-0"}/>

                            </span>
                        </li>
                        <li id="navi"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3845"><Link
                            href="#"><TbCategory2 size={24} color={"#162C5B"}/>
                            لیست علاقه مندی ها</Link></li>
                        <li id="navi"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3846"><Link
                            href="/"><TbCategory2 size={24} color={"#162C5B"}/>
                            تماس با ما</Link></li>
                        <li id="navi"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3847"><Link
                            href="#"><TbCategory2 size={24} color={"#162C5B"}/>
                            آخرین مقالات</Link></li>
                        <li id="navi"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3848"><Link
                            href="#"><TbCategory2 size={24} color={"#162C5B"}/>
                            تست</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuMobile;