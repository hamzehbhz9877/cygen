import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const GetAllActivePlugins = async () => {
    const data=await instant.get('Plugin/GetAllActivePlugins')
    return JSON.parse(JSON.stringify(data.data));
}

export const GetAllActivePluginsQuery = queryOptions({
    queryKey: ['GetAllActivePlugins'],
    queryFn:GetAllActivePlugins,
})