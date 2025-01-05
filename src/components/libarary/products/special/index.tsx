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
}
const SpecialSlider = ({data, title}: Props) => {

    const {windowWidth} = useResize()


    if (windowWidth <= 768)
        return <section className="special-slider slide-mobile">
            <div className="head-product">
                <h3><span className="titles-pro">{title}</span></h3>
                <span className="line-pro"></span>
            </div>
            <div className="carousel_lister">
                {data.map((item: any, index: number) =>
                    <Product row={false} key={index} {...item}/>)}
            </div>

        </section>
    else
        return (
            <div className="special-slider">

                <Swiper title={title} hasNextPrevButton={true} SwiperOptions={{
                    // autoplay: {
                        // delay: 4000,
                    // },
                    breakpoints: {
                        '1600': {
                            slidesPerView: 8,
                            spaceBetween: 10,
                        },
                        '1400': {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                        '1200': {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        '992': {
                            slidesPerView: 4,
                            spaceBetween: 10,
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