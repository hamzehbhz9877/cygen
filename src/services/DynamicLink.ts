import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";


export const GetDynamicLinkPositions = async () =>
    instant.get('DynamicLink/GetDynamicLinkPositions')

export const GetDynamicLinks = async (data) => await instant.get(`DynamicLink/GetDynamicLinks?${new URLSearchParams(data.map(v => ['Positions', v]))}`)

export const GetDynamicLinkPositionsQuery = queryOptions({
    queryKey: ['GetDynamicLinkPositions'],
    queryFn: async () => {
        const res: any = await GetDynamicLinkPositions()
        const data = await GetDynamicLinks(res?.data.map(item => (item.Value)))
        return data.data
    },
})


