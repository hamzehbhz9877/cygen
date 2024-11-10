import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";
import {redirectStatus} from "@/utils/notFound-server";
import axios from "axios";


export const GetDynamicLinkPositions = async () => instant.get('DynamicLink/GetDynamicLinkPositions')

export const GetDynamicLinks = async (data: string) => {
    const res=await instant.get(`DynamicLink/GetDynamicLinks?Postition=${data}`)
    return {data:res.data,key:data}
}

export const GetDynamicLinkPositionsQuery = queryOptions({
    queryKey: ['GetDynamicLinkPositions'],
    queryFn:async ()=>{
        const res = await GetDynamicLinkPositions()
        const data= await Promise.all(res.data.map((item) => GetDynamicLinks(item.Value)))
        .then((res:any) => res)
        .catch((err) => console.error(err));
        return data
    },
})


