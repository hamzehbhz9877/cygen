import React, {RefObject} from "react";


import Image from "next/image";
import Button from "@/components/button/simple";
import { LiaAngleLeftSolid,LiaAngleRightSolid } from "react-icons/lia";


type CustomButtons = {
    prevRef: RefObject<any> | null;
    nextRef: RefObject<any> | null;
    blogsBtn: boolean;
    // bulletRef: RefObject<any> | null;
};


const CustomButtons = ({nextRef, prevRef,blogsBtn}: CustomButtons) => {
    return (
        <div className="flex items-center slider__buttons">
            {blogsBtn?<Button className="bg-[#ED7D31] py-2 px-6 me-3" text="مشاهده آرشیو"/>:""}
            {
                nextRef ? <button className="swiper-button right bg-transparent " ref={prevRef}>
                    <LiaAngleRightSolid color={"#fff"} />

                </button> : ""
            }
            {/*{bulletRef ? <div*/}
            {/*    className="swiper-pagination"*/}
            {/*    ref={bulletRef}*/}
            {/*/> : ""}*/}
            {prevRef ?
                <button className="swiper-button left bg-transparent" ref={nextRef}>
                    <LiaAngleLeftSolid color={"#fff"}/>

                </button> : ""}
        </div>
    );
};

export default CustomButtons;