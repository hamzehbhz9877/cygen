import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const GetSiteSettings = () => instant.get('Common/GetSiteSettings')
export const GetPopularSearchTerms = () => instant.get('Common/GetPopularSearchTerms')

export const GetSiteSettingsQuery = queryOptions({
    queryKey: ['GetSiteSettings'],
    queryFn:GetSiteSettings,
})

export const GetPopularSearchTermsQuery = queryOptions({
    queryKey: ['GetPopularSearchTerms'],
    queryFn:GetPopularSearchTerms,
})