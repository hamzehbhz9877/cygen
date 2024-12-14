'use client'
import React, {useEffect, useRef} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {PiShoppingCartSimpleLight} from "react-icons/pi";
import {CiHeart, CiMenuKebab} from "react-icons/ci";
import {SlHeart} from "react-icons/sl";
import More from "@/layout/header/mobile/productDetails/more";
import useOverlay from "@/context/overlay/useOverlay";
import useClickOutside from "@/hooks/useOutsideClick";
import {HiArrowRight} from "react-icons/hi";
import Logo from "@/layout/header/top/logo";
import Image from "next/image";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const ProductMobileHeader = ({product}) => {
    const router = useRouter()
    const {data} = useSuspenseQuery(GetSiteSettingsQuery)

    const {toggleOverlay, classname} = useOverlay()

    useEffect(() => {
        classname("!z-[100]")
        return () => {
            classname("!z-[1]");
        }
    }, [])

    const handleMore = () => {
        document.querySelector(".more").classList.add("open");
        toggleOverlay(true)
    }
    const moreRef = useRef<HTMLLIElement | null>(null)

    const close = () => {
        document.querySelector('.more').classList.remove("open")
        toggleOverlay(false)
    }

    useClickOutside(moreRef, () => {
        if (document.querySelector('.more').classList.contains("open")) {
            close()
        }
    })

    return (
        <div>
            <More product={product} close={close}/>
            <div className="head">
                <div className="right-header-box">
                    <a id="backer-button" className="backer-button" role={"button"} onClick={() => router.back()}>
                        <HiArrowRight size={24} color={"#424750"}/>
                    </a>
                    <Link id="backer-button" className="backer-button" href="/">
                        <Image alt={data.Logo.StoreName} width={40} height={40}
                               src={data.Logo.LogoPath}/>
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

                        <li data-custom-open="loginmodal"><a href="#"><SlHeart size={24} color={"#162C5B"}/>
                        </a></li>
                        <li className="more-tooltip" onClick={handleMore} role="button" ref={moreRef}>
                            <CiMenuKebab size={24} color={"#162C5B"}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductMobileHeader;