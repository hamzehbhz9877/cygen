'use client'

import React from 'react';
import {SwiperSlide} from "swiper/react";
import dynamic from "next/dynamic";
import ProductSlider from "@/components/libarary/products/product";


import "./index.scss"
import useResize from "@/hooks/useResize";

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
        return <section className="right-product ">


            <div className="head-product">
                <h3><span className="titles-pro">{title}</span></h3>
                <span className="line-pro"></span>
            </div>
            <div className="carousel_lister">
                {new Array(10).fill(0).map((item: any, index: number) =>
                    <ProductSlider key={index}/>)}
            </div>

        </section>
    else
        return (
            <div className="product-slider">
                <h3 className={"product-slider__title"}>
                    <span>{title}</span>
                </h3>
                <Swiper hasNextPrevButton={true} hasDots={false} SwiperOptions={{
                    autoplay: {
                        delay: 4000,
                    },
                    breakpoints: {
                        '1200': {
                            slidesPerView: 5,
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
                    {new Array(10).fill(0).map((item: any, index: number) => <SwiperSlide key={index}>
                        <ProductSlider/>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        );
};

export default ProductSliders;