import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import {LuSend} from "react-icons/lu";
import {PiPlayBold} from "react-icons/pi";

const Actions = () => {
    return (
        <div className="btns-pro-slider">
            <div data-custom-open="loginmodal" className="btns-pro"><FaRegHeart color={"#4d4d4d"} size={26}
                                                                                className={"opacity-80"}/><span
                className="tooltiptext">افزودن به علاقه مندی ها</span></div>
            <a data-remodal-target="modalshare">
                <div className="btns-pro">
                    <LuSend color={"#4d4d4d"} size={26} className={"opacity-80"}/>
                    <span className="tooltiptext">به اشتراک گذاری</span></div>
            </a>
            <a data-remodal-target="modalvidoe">
                <div className="btns-pro">
                    <PiPlayBold color={"#4d4d4d"} size={26} className={"opacity-80"}/>
                    <span className="tooltiptext">ویدیو محصول</span>
                </div>
            </a>
        </div>
    );
};

export default Actions;