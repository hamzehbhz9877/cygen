'use client'
import React from 'react';
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import dynamic from "next/dynamic";

import "./index.scss"
import {LuBadgeCheck} from "react-icons/lu";


const Swiper = dynamic(() => import("@/components/libarary/brands/swiper/swiper"), {
    ssr: false
});

const Brands = ({data}) => {
    return (
        <div className={"brands "}>
            <div
                className="flex right flex-col items-center gap-[6px] rounded-[12px] lg:rounded-none lg:!rounded-r-[18px]
                 bg-gradient-to-r from-dynamic-color-from to-dynamic-color-to px-[42px] py-[20px] lg:py-[26px]">
                <LuBadgeCheck color="white"  className={'h-[25px] w-[25px] lg:h-[35px] lg:w-[35px] '}/>
                <p className="w-max text-[18px] lg:text-[22px] font-bold text-white">برندهای منتخب</p></div>
                <Swiper SwiperOptions={{
                    breakpoints: {
                        '1600': {
                            slidesPerView: 6.5,
                            spaceBetween: 10,
                        },
                        '1400': {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                        '1200': {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                        },
                        '992': {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                        },
                        '400': {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                        '0': {
                            slidesPerView: 1.5,
                            spaceBetween: 50,
                        },
                    },
                    lazyPreloadPrevNext: 4
                }}>
                    {data.map((item: any, index: number) => <SwiperSlide key={index}>
                        <div className={` z-10 my-4 lg:my-6 w-auto lg:w-[217px] ${ index+1===data.length?"":"border-l"} border-[rgb(145,158,188)] px-[10px] `}>
                            <Image src={item.Picture.ImageUrl} title={item.Picture.Title}
                                   alt={item.Picture.AlternateText}
                                   priority width={100} height={100}
                                   className={"w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto"}/>
                        </div>

                        </SwiperSlide>
                    )}
                </Swiper>
        </div>

    );
};

export default Brands;