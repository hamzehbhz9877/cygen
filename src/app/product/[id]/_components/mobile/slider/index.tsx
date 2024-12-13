'use client'

import React from 'react';
import SpecialOffer from "@/components/product/specialOffer";
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FilesModal from "@/app/product/[id]/_components/slider/filesModal";
import useModal from "@/context/modal/useModal";

import "./index.scss"
import {productStore} from "@/state/product/product";

const Swiper = dynamic(() => import("@/components/libarary/banner/swiper/swiper"), {
    ssr: false
});
const SliderMobile = ({product}) => {

    const {openModal,closeModal}=useModal()

    const {image}=productStore()


    return (
        <div className={"mb-[30px] mt-[80px] block md:hidden"}>
            <SpecialOffer/>

            <div className={"product-details-slider"}>
                <Swiper hasNextPrevButton={false} index={product.PictureModels.findIndex(d=>d.Id===image)} hasDots={true} SwiperOptions={{
                    lazyPreloadPrevNext: 4
                }}>
                    {product.PictureModels.map((item: any, index: number) => <SwiperSlide
                            key={index+1} onClick={() => openModal(<FilesModal data={product} type={"image"} index={index}
                                                                             close={closeModal}/>, {className: "!w-full !rounded-none !h-auto !m-0 !bg-black"})}>
                            <Image src={item.ImageUrl} title={item.Title}
                                   alt={item.AlternateText}
                                   priority width={0} height={0} layout={"responsive"}
                                   className={"max-w-[230px] mx-auto static w-full"}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>


        </div>
    )
        ;
};

export default SliderMobile;