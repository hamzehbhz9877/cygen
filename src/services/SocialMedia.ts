import {queryOptions} from "@tanstack/react-query";
import {instant} from "@/services/httpservice";

export const GetSocialMedias = () => instant.get('SocialMedia/GetSocialMedias')

export const GetSocialMediasQuery = queryOptions({
    queryKey: ['GetSocialMedias'],
    queryFn:GetSocialMedias,
})