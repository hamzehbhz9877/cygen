import React, {RefObject} from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

type CustomButtons = {
    prevRef: RefObject<any> | null;
    nextRef: RefObject<any> | null;
};



const CustomButtons = ({nextRef, prevRef}: CustomButtons) => {
    return (
        <div className="items-center slider__buttons flex gap-[5px] z-[10] absolute left-[20px]">
            {
                nextRef ? <button className="swiper-button right" ref={prevRef}>
                    <FaAngleRight size={20} color={"#000"}/>

                </button> : ""
            }
            {prevRef ?
                <button className="swiper-button left" ref={nextRef}>
                    <FaAngleLeft size={20} color={"#000"}/>
                </button> : ""}
        </div>
    );
};

export default CustomButtons;