'use client'

import React from 'react';
import {SwiperSlide} from "swiper/react";
import dynamic from "next/dynamic"

import useResize from "@/hooks/useResize";
import Product from "@/components/product/single";

import "./index.scss"
import Blog from "@/app/_components/blogs/blog";

const Swiper = dynamic(() => import("@/components/libarary/products/swiper/swiper"), {
    ssr: false
});

type Props = {
    data: any
    title: string
    isNewsOrBlog?: boolean
}
const ProductSliders = ({data, title,isNewsOrBlog=false}: Props) => {

    const {windowWidth} = useResize()


    if (windowWidth <= 768)
        return <section className="section-slider slide-mobile ">
            <div className="head-product">
                <h3><span className="titles-pro">{title}</span></h3>
                <span className="line-pro"></span>
            </div>
            <div className="carousel_lister">
                {isNewsOrBlog ?data.map((item: any, index: number) =><Blog {...item} key={data.Id}/>):
                data.map((item: any, index: number) =>
                    <Product row={false} key={index} {...item}/>)}
            </div>

        </section>
    else
        return (
            <div>
                <div className="section-slider">
                    <Swiper title={title} hasNextPrevButton={true} SwiperOptions={{
                        // autoplay: {
                        // delay: 4000,
                        // },
                        breakpoints: {
                            '1600': {
                                slidesPerView: isNewsOrBlog?5 :6,
                                spaceBetween: 10,
                            },
                            '1400': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            '1200': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            '992': {
                                slidesPerView: 3,
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

                        {isNewsOrBlog?
                            data.map((item: any, index: number) => <SwiperSlide key={index}>
                                <Blog {...item}/>
                            </SwiperSlide>)
                            :data.map((item: any, index: number) => <SwiperSlide key={index}>
                            <Product {...item}/>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>

        );
};

export default ProductSliders;