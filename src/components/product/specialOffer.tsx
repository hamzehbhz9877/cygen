'use client'

import React from 'react';
import useCountdown from "@/hooks/useCountdown";

const SpecialOffer = () => {

    const {hours,minutes,seconds,days}=useCountdown(new Date("2024/10/18"))

    return (
        <div className="head-archie-pro"><span className="onsale">پیشنهاد ویژه</span>
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