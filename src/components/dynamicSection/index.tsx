'use client'

import React, {useEffect, useState} from 'react';
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicSections} from "@/services/DynamicSection";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import ProductSliders from "@/components/libarary/products";
import SpecialSlider from "@/components/libarary/products/special";

type DynamicSectionType = Partial<{
    PositionSystemName: string
    PictureSize: number
    data?: any
}>
const DynamicSection = ({data, ...rest}: DynamicSectionType) => {

    const [res, setRes] = useState<any>();
    const {data: section} = useQuery({
        queryFn: () => GetDynamicSections({...rest}),
        queryKey: ['dynamicSection', {...rest}],
        enabled: !data
    })
    const {data: plugin} = useSuspenseQuery(GetAllActivePluginsQuery)

    useEffect(() => {
        if (data)
            setRes(data)
    }, [data])

    useEffect(() => {
        if (!data)
            setRes(section?.data)
    }, [section])

    if (plugin.includes('Widgets.DynamicSection'))
        return (
            <div>
                {res?.map((item: any, index: number) => (
                    item.Theme === 1 ?
                        <div className={"container"} key={item.Id}>
                            <ProductSliders data={item.Products} title={item.Title}/>
                        </div> : item.Products.length > 0 ? <SpecialSlider
                            extra={{...item}}
                            key={item.Id} data={item.Products} title={item.Title}/> : ""
                ))}
            </div>
        );
};

export default DynamicSection;