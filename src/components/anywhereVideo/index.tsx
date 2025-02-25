'use client'

import React from 'react';
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import {GetAnywhereVideos} from "@/services/AnyWhereVideo";
import VideoSlider from "@/components/anywhereVideo/videoSlider";

type AnywhereVideoType = Partial<{
    PositionSystemName: string
    EntityId: number
    EntityName: string
}>

const AnywhereVideo = ({...rest}: AnywhereVideoType) => {
    const {data: anywhereVideo} = useQuery({
        queryFn: () => GetAnywhereVideos({...rest}),
        queryKey: ['anywhereVideo', {...rest}]
    })
    const {data} = useSuspenseQuery(GetAllActivePluginsQuery)


    if (data.includes('Widgets.AnywhereVideo'))
        return (
            <div>
                {anywhereVideo?.data.map((item: any, index: number) => (
                        <div className={"container"} key={item.Id}>
                            <VideoSlider/>
                        </div>
                ))}
            </div>
        );
};

export default AnywhereVideo;