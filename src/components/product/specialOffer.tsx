'use client'

import React from 'react';
import useCountdown from "@/hooks/useCountdown";

import "./spicialOffer.scss"

const SpecialOffer = ({offers}:any) => {

    const {hours,minutes,seconds,days}=useCountdown(offers)

    return (
        <div className="head-archie-pro w-full">
            <span className="onsale">پیشنهاد ویژه</span>
            <p id="sales_timer_display">
                <span>
                    <span className="number">{days}</span>
                    <span className="dot">:</span>
                </span>

                <span>
                    <span className="number">{hours}</span>
                    <span className="dot">:</span>
                </span>

                <span>
                    <span className="number">{minutes}</span>
                    <span className="dot">:</span>
                </span>
                <span>
                    <span className="number">{seconds}</span>
                </span>
            </p>
        </div>
    );
};

export default SpecialOffer;