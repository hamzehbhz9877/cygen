import React, {RefObject} from "react";
import { LiaAngleLeftSolid,LiaAngleRightSolid } from "react-icons/lia";


type CustomButtons = {
    prevRef: RefObject<any> | null;
    nextRef: RefObject<any> | null;
};


const CustomButtons = ({nextRef, prevRef}: CustomButtons) => {
    return (
        <div className="flex items-center slider__buttons">
            {
                nextRef ? <button className="swiper-button right bg-transparent " ref={prevRef}>
                    <LiaAngleRightSolid color={"#000"} />

                </button> : ""
            }
            {prevRef ?
                <button className="swiper-button left bg-transparent" ref={nextRef}>
                    <LiaAngleLeftSolid color={"#000"}/>

                </button> : ""}
        </div>
    );
};

export default CustomButtons;