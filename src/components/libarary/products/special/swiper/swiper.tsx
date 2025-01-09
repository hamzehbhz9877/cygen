'use client'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, {useRef} from "react";
import {Swiper as SwiperJs} from "swiper/react";

import {Navigation, Pagination, Autoplay} from "swiper/modules";
import UseNextPrevSwiper from "@/hooks/swipper/useNextPrev";
import CustomButtons from "@/components/libarary/products/special/swiper/customButtons";

import {SwiperOptions} from "swiper/types";


type swiperType = {
    children: React.ReactNode
    SwiperOptions?: SwiperOptions
    hasNextPrevButton?: boolean
    title: string
    extra?:any
}

const Swiper = ({children,extra, SwiperOptions, hasNextPrevButton = true, title}: swiperType) => {
    const {
        nextRef, prevRef, setSwiper,
        afterInit
    } = UseNextPrevSwiper();
    const bulletRef = useRef(null);

    return (
        <div className="relative min-w-0 ">
            <div className={"text-center mb-[30px] flex justify-between items-center"}>
                <h3 className={"special-slider__title"} style={{color:extra.TextColorCode}}>{title}</h3>
                <CustomButtons
                    nextRef={hasNextPrevButton ? nextRef : null}
                    prevRef={hasNextPrevButton ? prevRef : null}
                />
            </div>
            <div className={"mr-[30px]"}>

            <SwiperJs
                modules={[Navigation, Pagination, Autoplay]}
                onAfterInit={afterInit}
                // spaceBetween={18}
                updateOnWindowResize
                navigation={{prevEl: prevRef?.current, nextEl: nextRef?.current}}
                pagination={{clickable: true, el: bulletRef?.current}}
                onSwiper={setSwiper}
                className="swiper-slides "
                {...SwiperOptions}
            >
                {children}
            </SwiperJs>
            </div>
        </div>
    );
};

export default Swiper;