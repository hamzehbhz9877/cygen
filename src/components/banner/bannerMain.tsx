'use client'

import React from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import Slider from "@/components/banner/slider";
import Link from "next/link";
import Image from "next/image";
import {GetAllActivePluginsQuery} from "@/services/Plugin";


type BannerType = Partial<{
    type?: boolean
    isSingle?: boolean
    ignorecontainer?: boolean
    data:any
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

const BannerMain = ({type = false, isSingle = false,ignorecontainer=false, data}: BannerType) => {


    const {data:widget} = useSuspenseQuery(GetAllActivePluginsQuery)

    if (data?.length>0 && widget.includes('Widgets.AnyWherePicture'))
        if (type) {
            return (
                <div className="banner banner-tiny">
                    <Slider data={data.filter(d => d.Type === 3)}/>

                    <div className="mt-[7px]">
                        <Slider data={data.filter(d => d.Type === 2)}/>
                    </div>
                    <div className="mt-[7px]">
                        {
                            data.filter(d => d.Type === 1)?.map((item: any, index: number) =>
                                <LinkImage item={item} key={index}/>
                            )
                        }
                    </div>

                </div>
            )
        } else {
            return (
                <div className={`banner flex flex-col gap-[10px]`}>

                    {data.filter(d => d.Type === 3).length > 0 ?
                        <div className="sliderWide">
                            <Slider data={data.filter(d => d.Type === 3)}/>
                        </div> : ""}

                    {data.filter(d => d.Type === 2).length > 0 ?
                        <div className={`${ignorecontainer?"":'container'}`}>
                            <Slider data={data.filter(d => d.Type === 2)}/>
                        </div> : ""}
                    {

                        data.filter(d => d.Type === 1).length > 0 ?
                            <div className={`${isSingle?"single":"container"}  gap-3 grid-${data.filter(d => d.Type === 1).length}`}>
                                {
                                    data.filter(d => d.Type === 1)?.map((item: any, index: number) =>
                                        <LinkImage item={item} key={index}/>)
                                }
                            </div> :""
                    }
                </div>
            );
        }
};

export default BannerMain;