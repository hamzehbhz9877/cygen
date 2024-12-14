'use client'

import React from 'react';
import { RiHome5Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { TbCategoryFilled } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";


import "./index.scss"
import useModal from "@/context/modal/useModal";
import Login from "@/components/login";
import Link from "next/link";
import useAuth from "@/context/authentication/useAuth";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Navbar = ({openMenu}:{openMenu:()=>void}) => {

    const {openModal}=useModal()
const {user}=useAuth()

    const handleLogin=()=>{
        if(!user)
        openModal(<Login/>,{className:"login"})
    }

    return (
        <div className="mobile-navbar-menu havsecond">

            <nav className="mobile-bottom-navabr blur_back">

                <div className="mobile-bottom-navitem ">
                    <Link href="https://mobile.parskalas.com">
                        <RiHome5Fill size={24} color={"#333"}/>
                        <span>خانه</span>
                    </Link>
                </div>


                {/*<div className="mobile-bottom-navitem ">*/}
                {/*    <Link href="https://mobile.parskalas.com/search">*/}
                {/*        <RiSearch2Line size={24} color={"#333"}/>*/}
                {/*        <span>جستجو</span>*/}
                {/*    </Link>*/}
                {/*</div>*/}


                <div className="mobile-bottom-navitem ">
                    <Link href="#" onClick={openMenu}>
                        <TbCategoryFilled size={28} color={"#08c96f"}/>
                        <span>دسته بندیها</span>
                    </Link>
                </div>


                <div className="mobile-bottom-navitem cart1">
                    <Link href="https://mobile.parskalas.com/cart">
                        <CiShoppingCart  size={28} color={"#333"}/>
                        <span>سبد خرید</span>
                    </Link>
                </div>


                <div className="mobile-bottom-navitem account1 " onClick={handleLogin}>
                    <Link href="#" className="relative"  scroll={false}>
                        <AiOutlineUser size={28} color={"#333"}/>
                        {user?<IoCheckmarkCircleSharp className="check" size={11}/>
                        :""}
                        <span>حساب کاربری</span>
                    </Link>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;