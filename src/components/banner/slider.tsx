"use client"

import React from 'react';
import {SwiperSlide} from "swiper/react";
import Image from "next/image";


//css
import "./slider.scss"
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";


const Swiper = dynamic(() => import("@/components/libarary/banner/swiper/swiper"),{
    ssr:false
});

const Slider = ({data}:{data:any}) => {

    const router=useRouter()

    // const {windowWidth}=useResize()
    return (
        <div className="banner-slider">
            <Swiper hasNextPrevButton={true} SwiperOptions={{autoplay: {
                    delay: 4000,
                },
                lazyPreloadPrevNext:4
            }}>
                {data.map((item:any,index:number) => <SwiperSlide key={index}>
                    <Image src={item.Picture.ImageUrl} title={item.Picture.Title}
                           alt={item.Picture.AlternateText}
                           priority width={0} height={0} layout={"responsive"} className={"static w-full"}/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider