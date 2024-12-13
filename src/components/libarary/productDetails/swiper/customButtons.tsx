import React, {RefObject} from "react";
import {LiaAngleLeftSolid, LiaAngleRightSolid} from "react-icons/lia";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";


type CustomButtons = {
    prevRef: RefObject<any> | null;
    nextRef: RefObject<any> | null;
    // bulletRef: RefObject<any> | null;
};


const CustomButtons = ({nextRef, prevRef}: CustomButtons) => {
    return (
        <div className=" items-center slider__buttons hidden lg:flex">
            {
                nextRef ? <button className="swiper-button right" ref={prevRef}>
                    <FaAngleRight size={28} color={"#424750"}/>


                </button> : ""
            }
            {prevRef ?
                <button className="swiper-button left" ref={nextRef}>
                    <FaAngleLeft size={28} color={"#424750"}/>

                </button> : ""}
        </div>
    );
};

export default CustomButtons;