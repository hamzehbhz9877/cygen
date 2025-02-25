'use client'
import React, {useEffect, useRef} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {PiPlayLight, PiShare, PiShoppingCartSimpleLight} from "react-icons/pi";
import {CiHeart, CiMenuKebab} from "react-icons/ci";
import {SlHeart} from "react-icons/sl";
import {HiArrowRight} from "react-icons/hi";
import Image from "next/image";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";
import {FlyoutShoppingCart} from "@/services/ShoppingCart";
import Share from "@/app/product/[name]/_components/slider/modal/share";
import FilesModal from "@/app/product/[name]/_components/slider/filesModal";
import More from "@/components/modal/slideIn";
import useSlideInModal from "@/hooks/useSlideinModal";
import useModal from "@/context/modal/useModal";
import useOverlay from "@/context/overlay/useOverlay";
import useClickOutside from "@/hooks/useOutsideClick";
import UseSlideinModal from "@/hooks/useSlideinModal";

const ProductMobileHeader = ({product}) => {
    const router = useRouter()


    const {data} = useSuspenseQuery(GetSiteSettingsQuery)

    const {handleMore,isOpen,close,moreRef} = UseSlideinModal()



    const {closeModal, openModal} = useModal()

    const {data: cart} = useQuery({
        queryKey: ["FlyoutShoppingCart"],
        queryFn: FlyoutShoppingCart,
    })

    return (
        <div>
            <More isOpen={isOpen}>
                <ul>
                    <li>
                        <a rel="nofollow" onClick={() => {
                            close()
                            openModal(<Share close={closeModal}/>, {className: "!w-max "})
                        }}
                        >
                            <PiShare size={22} className="me-[15px]" color={"#4b4f58"}/>
                            <span>به اشتراگ گذاری</span>
                        </a>
                    </li>
                    {
                        product.VideoModels.length > 0 ?
                            <li>
                                <a rel="nofollow" onClick={() => {
                                    close()
                                    openModal(<FilesModal data={product} type={"video"}
                                                          index={product.PictureModels.length} close={closeModal}/>,
                                        {className: "!w-full !rounded-none !h-auto !m-0"})
                                }}
                                >
                                    <PiPlayLight size={22} className="me-[15px]" color={"#4b4f58"}/>
                                    <span>ویدیو محصول</span>
                                </a>
                            </li> : ""}
                </ul>
            </More>

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
                            <Link href="/cart" className="relative">
                                <PiShoppingCartSimpleLight size={24} color={"#162C5B"}/>
                                <em className="mini_cart_counter ">{cart?.data.TotalProducts ?? 0}</em>
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