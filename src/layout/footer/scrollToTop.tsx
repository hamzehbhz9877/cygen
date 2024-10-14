'use client'

import React from 'react';
import {MdOutlineKeyboardArrowUp} from "react-icons/md";

const ScrollToTop = () => {
    return (
        <div className="jump-box" onClick={() => window.scroll(0, 0)}>

            <a href="#tops">

                <span>بازگشت به بالا</span>
                <MdOutlineKeyboardArrowUp size={22} color={"#a1a3a8"} className="ms-1"/>

            </a>

        </div>
    );
};

export default ScrollToTop;