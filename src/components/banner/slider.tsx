"use client"

import React from 'react';
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";


const Swiper = dynamic(() => import("@/components/libarary/banner/swiper/swiper"),{
    ssr:false
});

const Slider = ({data}:{data:any}) => {

    const router=useRouter()

    // const {windowWidth}=useResize()
    return (
        <div className="banner-slider">
            <Swiper hasNextPrevButton={true} hasDots={data.length>1} SwiperOptions={{autoplay: {
                    delay: 4000,
                },
                lazyPreloadPrevNext:4
            }}>
                {data?.map((item:any,index:number) => <SwiperSlide key={index}>
                    <Link href={item.Url ?? '/'} target={item.OpenInNewPage ? '_blank' : "_self"}>
                        <picture>
                            <source media="(max-width:768px)"
                                    srcSet={item.MobilePicture.ImageUrl} title={item.MobilePicture.Title}
                                    width={0} height={0}
                                    className={"static w-full"}
                            />
                            <Image src={item.Picture.ImageUrl} title={item.Picture.Title}
                                   alt={item.Picture.AlternateText}
                                   priority width={0} height={0} layout={"responsive"}
                                   className={"static w-full"}/>
                        </picture>
                    </Link>

                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Slider