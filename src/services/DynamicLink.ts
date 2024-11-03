import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";


export const GetDynamicLinkPositions = () => instant.get('DynamicLink/GetDynamicLinkPositions')
export const GetDynamicLinks = (data:string) => instant.get(`DynamicLink/GetDynamicLinks?Position=${data}`)

export const GetDynamicLinkPositionsQuery = queryOptions({
    queryKey: ['GetDynamicLinkPositions'],
    queryFn: () => GetDynamicLinkPositions(),
})




