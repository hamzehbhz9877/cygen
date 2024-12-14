'use client'

import React from 'react';
import {SwiperSlide} from "swiper/react";
import dynamic from "next/dynamic";


import "./index.scss"
import useResize from "@/hooks/useResize";
import Product from "@/components/product/single";

const Swiper = dynamic(() => import("@/components/libarary/products/swiper/swiper"), {
    ssr: false
});

type Props = {
    data: any
    title: string
}
const ProductSliders = ({data, title}: Props) => {

    const {windowWidth} = useResize()

    if (windowWidth <= 768)
        return <section className="product-slider slide-mobile de-slider">
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
            <div className="product-slider de-slider">
                <h3 className={"product-slider__title"}>
                    <span>{title}</span>
                </h3>
                <Swiper hasNextPrevButton={true} hasDots={false} SwiperOptions={{
                    // autoplay: {
                        // delay: 4000,
                    // },
                    breakpoints: {
                        '1600': {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                        '1400': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        '1200': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        '992': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        '400': {
                            slidesPerView: 2,
                            spaceBetween: 50,
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

export default ProductSliders;