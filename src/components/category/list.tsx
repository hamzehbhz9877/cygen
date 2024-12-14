'use client'

import React, {useEffect, useState} from 'react';

// css
import "./index.scss"
import Category from "@/components/category/single";
import OtherCategory from "@/components/category/otherCategory";
import useResize from "@/hooks/useResize";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";
import {useSearchParams} from "next/navigation";


export type CategoryListType = {
    data:any,
}

const CategoryList = ({data}: CategoryListType) => {

    const [otherCategory, setOtherCategory] = useState(false)


    // const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)
    // const search=useSearchParams()

    const {windowWidth} = useResize()

    useEffect(() => {
        if (windowWidth < 1024)
            setOtherCategory(true)
    }, [windowWidth])

    return (
        <div className="categories container" id={"content"}>
            <div className="categories__title">دسته‌بندی‌ها</div>

            <div className={"categories__list"}>

                {/*{search.get("q") && data.length ===0 ? setting.TopMenu.Categories}*/}
            {
                    data?.length > 7 ? <>
                        {data.slice(0, 7).map((data, index: number) => {
                            return <Category {...data} key={index}/>
                        })}
                        {otherCategory ?
                            data.slice(7, data?.length).map((data: any, index: number) => {
                                return <Category {...data} key={index}/>
                            })
                            :
                            <OtherCategory otherContent={(data) => setOtherCategory(data)} itemCount={data.length - 7}/>
                        }
                    </> : data?.map((data, index) => {
                        return <Category {...data} key={index}/>
                    })
                }
            </div>


        </div>

    );
};

export default CategoryList;