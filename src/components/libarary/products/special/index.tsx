'use client'

import React from 'react';
import {SwiperSlide} from "swiper/react";
import dynamic from "next/dynamic"

import useResize from "@/hooks/useResize";
import Product from "@/components/product/single";

import "./index.scss"

const Swiper = dynamic(() => import("@/components/libarary/products/special/swiper/swiper"), {
    ssr: false
});

type Props = {
    data: any
    title: string
    extra:any
}
const SpecialSlider = ({data, title,extra}: Props) => {

    const {windowWidth} = useResize()

    if (windowWidth <= 768)
        return <section className="special-slider slide-mobile" style={{backgroundColor:extra.BackgroundColorCode}}>
            <div className="text-center mb-[10px] mt-[15px] flex justify-center items-center">
                <h3><span className="special-slider__title" style={{color:extra.TextColorCode}}>{title}</span></h3>
            </div>
            <div className="carousel_lister">
                {data.map((item: any, index: number) =>
                    <Product row={false} key={index} {...item}/>)}
            </div>

        </section>
    else
        return (
            <div className="special-slider" style={{backgroundColor:extra.BackgroundColorCode}}>

                <Swiper title={title} extra={extra} hasNextPrevButton={true} SwiperOptions={{
                    autoplay: {
                        delay: 4000,
                    },

                    breakpoints: {
                        '1600': {
                            slidesPerView: 7.5,
                            spaceBetween: 10,
                            loop:data.length>=7,
                        },
                        '1400': {
                            slidesPerView: 6.5,
                            spaceBetween: 10,
                            loop:data.length>=6,
                        },
                        '1200': {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                            loop:data.length>=5,
                        },
                        '992': {
                            slidesPerView: 4.5,
                            spaceBetween: 10,
                            loop:data.length>=4,
                        },
                        '400': {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        '0': {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                    },
                    lazyPreloadPrevNext: 4
                }}>
                    {data.map((item: any, index: number) => <SwiperSlide key={index}>
                        <Product {...item}/>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        );
};

export default SpecialSlider;