import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";
import {GetSocialMedias} from "@/services/SocialMedia";

export const GetLicenseLogos = () => instant.get('LicenseLogo/GetLicenseLogos')

export const GetLicenseLogosQuery = queryOptions({
    queryKey: ['GetLicenseLogos'],
    queryFn:async ()=>{
        const res=await GetLicenseLogos()
        return JSON.parse(JSON.stringify(res.data))
    },
})