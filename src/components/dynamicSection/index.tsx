'use client'

import React from 'react';
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicSections} from "@/services/DynamicSection";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import ProductSliders from "@/components/libarary/products";
import SpecialSlider from "@/components/libarary/products/special";

type DynamicSectionType = Partial<{
    PositionSystemName: string
    PictureSize: number
}>
const DynamicSection = ({...rest}: DynamicSectionType) => {
    const {data: section} = useQuery({
        queryFn: () => GetDynamicSections({...rest}),
        queryKey: ['dynamicSection', {...rest}]
    })
    const {data} = useSuspenseQuery(GetAllActivePluginsQuery)


    if (data.includes('Widgets.DynamicSection'))
        return (
            <div>
                {section?.data.map((item: any, index: number) => (
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