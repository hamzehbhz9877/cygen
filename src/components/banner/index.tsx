'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {GetAnywherePictures} from "@/services/AnyWherePicture";
import Image from "next/image";
import Slider from "@/components/banner/slider";


type BannerType = Partial<{
    PositionSystemName: string
    EntityId: string
    EntityName: string
    PictureSize: number
    MobilePictureSize: number
}>

const Banner = ({...rest}: BannerType) => {

    const {data: banner} = useQuery({
        queryFn: () => GetAnywherePictures({...rest}),
        queryKey: ['banner', {...rest}]
    })



    if (banner?.data.length > 0)
        return (
            <div className="banner">
                <Slider data={banner.data}/>
            </div>
        );
};

export default Banner;