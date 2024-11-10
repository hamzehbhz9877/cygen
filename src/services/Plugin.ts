import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const GetAllActivePlugins = () => instant.get('Plugin/GetAllActivePlugins')

export const GetAllActivePluginsQuery = queryOptions({
    queryKey: ['GetAllActivePlugins'],
    queryFn:GetAllActivePlugins,
})