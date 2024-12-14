'use client'

import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import {LuSend} from "react-icons/lu";
import {PiPlayBold} from "react-icons/pi";
import useModal from "@/context/modal/useModal";
import Share from "@/app/product/[name]/_components/slider/modal/share";
import FilesModal from "@/app/product/[name]/_components/slider/filesModal";

const Actions = ({product}) => {
    const {openModal,closeModal}=useModal()
    return (
        <div className="btns-pro-slider">
            {
                product.AddToCart.DisableWishlistButton ? '' :
                    <div data-custom-open="loginmodal" className="btns-pro"><FaRegHeart color={"#4d4d4d"} size={26}
                                                                                        className={"opacity-80"}/><span
                        className="tooltiptext">افزودن به علاقه مندی ها</span></div>
            }
            <a
               onClick={() => openModal(<Share close={closeModal}/>, {className: "!w-max !rounded-[6px]"})}>
                <div className="btns-pro">
                    <LuSend color={"#4d4d4d"} size={26} className={"opacity-80"}/>
                    <span className="tooltiptext" >به اشتراک گذاری</span></div>
            </a>
            {
                product.VideoModels.length > 0 ?
                    <a onClick={() => openModal(<FilesModal data={product} type={"video"}
                                                            index={product.PictureModels.length} close={closeModal}/>,
                        {className: "!min-h-max !h-[700px] !w-[900px] "})}>
                        <div className="btns-pro">
                            <PiPlayBold color={"#4d4d4d"} size={26} className={"opacity-80"}/>
                            <span className="tooltiptext">ویدیو محصول</span>
                        </div>
                    </a>:""
            }

        </div>
    );
};

export default Actions;