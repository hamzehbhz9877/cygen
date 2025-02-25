'use client'

import React from 'react';
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetAnywherePictures} from "@/services/AnyWherePicture";
import Slider from "@/components/banner/slider";
import Link from "next/link";
import Image from "next/image";
import {GetAllActivePluginsQuery} from "@/services/Plugin";


type BannerType = Partial<{
    PositionSystemNames:string
    EntityId: string
    EntityName: string
    PictureSize: number
    MobilePictureSize: number
    type?: boolean
    isSingle?: boolean
    ignorecontainer?: boolean
}>

const LinkImage = ({item}) => {
    return <Link href={item.Url ?? '/'}
                 target={item.OpenInNewPage ? '_blank' : "_self"}>
        <picture>
            <source media="(max-width:768px)"
                    srcSet={item.MobilePicture.ImageUrl} title={item.MobilePicture.Title}
                    width={0} height={0}
                    className={"static w-full"}
            />
            <Image src={item.Picture.ImageUrl} title={item.Picture.Title}
                   alt={item.Picture.AlternateText}
                    width={0} height={0} layout={"responsive"}
                   className={"static w-full"}/>
        </picture>

    </Link>
}

const Banner = ({type = false, isSingle = false,ignorecontainer=false, ...rest}: BannerType) => {

    const {data: banner} = useQuery({
        queryFn: () => GetAnywherePictures({...rest}),
        queryKey: ['banner', {...rest}]
    })

    const {data} = useSuspenseQuery(GetAllActivePluginsQuery)

    if (banner?.data[0].AnyWherePictures.length > 0 && data.includes('Widgets.AnyWherePicture'))
        if (type) {
            return (
                <div className="banner banner-tiny">
                    <Slider data={banner.data[0].AnyWherePictures.filter(d => d.Type === 3)}/>

                    <div className="mt-[7px]">
                        <Slider data={banner.data[0].AnyWherePictures.filter(d => d.Type === 2)}/>
                    </div>
                    <div className="mt-[7px]">
                        {
                            banner.data[0].AnyWherePictures.filter(d => d.Type === 1)?.map((item: any, index: number) =>
                                <LinkImage item={item} key={index}/>
                            )
                        }
                    </div>

                </div>
            )
        } else {
            return (
                <div className={`banner flex flex-col gap-[10px]`}>

                    {banner.data[0].AnyWherePictures.filter(d => d.Type === 3).length > 0 ?
                        <div className="sliderWide">
                            <Slider data={banner.data[0].AnyWherePictures.filter(d => d.Type === 3)}/>
                        </div> : ""}

                    {banner.data[0].AnyWherePictures.filter(d => d.Type === 2).length > 0 ?
                        <div className={`${ignorecontainer?"":'container'}`}>
                            <Slider data={banner.data[0].AnyWherePictures.filter(d => d.Type === 2)}/>
                        </div> : ""}
                    {

                            banner.data[0].AnyWherePictures.filter(d => d.Type === 1).length > 0 ?
                                <div className={`${isSingle?"single":"container"}  gap-3 grid-${banner.data[0].AnyWherePictures.filter(d => d.Type === 1).length}`}>
                                    {
                                        banner.data[0].AnyWherePictures.filter(d => d.Type === 1)?.map((item: any, index: number) =>
                                            <LinkImage item={item} key={index}/>)
                                    }
                                </div> :""
                    }
                </div>
            );
        }
};

export default Banner;