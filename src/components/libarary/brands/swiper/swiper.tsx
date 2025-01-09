'use client'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss"

import {Swiper as SwiperJs} from "swiper/react";

import {Navigation, Autoplay} from "swiper/modules";
import UseNextPrevSwiper from "@/hooks/swipper/useNextPrev";
import CustomButtons from "@/components/libarary/brands/swiper/customButtons";

import {SwiperOptions} from "swiper/types";


type swiperType = {
    children: React.ReactNode
    SwiperOptions?: SwiperOptions
}

const Swiper = ({
                    children,
                    SwiperOptions,
                }: swiperType) => {
    const {
        nextRef, prevRef, setSwiper,
        afterInit
    } = UseNextPrevSwiper();

    return (
        <div className="relative  w-full overflow-hidden">
            <SwiperJs
                modules={[Navigation, Autoplay]}
                onAfterInit={afterInit}
                spaceBetween={18}
                updateOnWindowResize
                navigation={{prevEl: prevRef?.current, nextEl: nextRef?.current}}
                onSwiper={setSwiper}
                className="swiper-slides"
                {...SwiperOptions}
            >
                {children}
            </SwiperJs>
            <div className="absolute inset-0 ">
                <CustomButtons
                    nextRef={nextRef}
                    prevRef={prevRef}
                />
            </div>
        </div>
    );
};

export default Swiper;