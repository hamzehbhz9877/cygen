'use client'
import React, {useRef} from 'react';
import {FaAngleRight} from "react-icons/fa6";
import {RiHeart3Line, RiHome5Line, RiHomeSmile2Line} from "react-icons/ri";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {CgMoreVertical} from "react-icons/cg";
import {PiShoppingCartSimpleLight} from "react-icons/pi";
import {LiaAngleRightSolid} from "react-icons/lia";
import {CiHeart, CiMenuKebab} from "react-icons/ci";
import {SlHeart} from "react-icons/sl";
import More from "@/layout/header/mobile/more";
import useOverlay from "@/context/overlay/useOverlay";
import useClickOutside from "@/hooks/useOutsideClick";

const ProductMobileHeader = () => {
    const router = useRouter()

    const {toggleOverlay,classname}=useOverlay()

    const handleMore=()=>{
        document.querySelector(".more").classList.add("open");
        toggleOverlay(true)
        classname("!z-[200]")
    }
    const moreRef = useRef<HTMLLIElement | null>(null)

    useClickOutside(moreRef, () => {
        if(document.querySelector('.more').classList.contains("open"))
        {
            classname("!z-[1]");
            document.querySelector('.more').classList.remove("open")
            toggleOverlay(false)
        }
    })

    return (
        <>
            <div className="right-header-box">
                <a id="backer-button" className="backer-button" role={"button"} onClick={() => router.back()}>
                    <LiaAngleRightSolid  size={24} color={"#162C5B"}/>
                </a>
                <Link id="backer-button" className="backer-button" href="https://mobile.parskalas.com">
                    <RiHomeSmile2Line  size={24} color={"#162C5B"}/>
                </Link>
            </div>


            <div className="left-header-box">
                <ul className="product-tooltips">

                    <li className="carter-mobiler">
                        <Link href="/" className="relative">
                            <PiShoppingCartSimpleLight size={24} color={"#162C5B"}/>
                                <em className="mini_cart_counter ">0</em>
                        </Link>
                    </li>

                    <li data-custom-open="loginmodal"><a href="#"><SlHeart   size={24} color={"#162C5B"}/>
                    </a></li>
                    <li className="more-tooltip" onClick={handleMore} role="button" ref={moreRef}>
                            <CiMenuKebab  size={24} color={"#162C5B"} />
                    </li>
                </ul>
            </div>
            <More/>
        </>
    );
};

export default ProductMobileHeader;