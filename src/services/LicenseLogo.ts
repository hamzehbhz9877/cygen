import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const GetLicenseLogos = () => instant.get('LicenseLogo/GetLicenseLogos')

export const GetLicenseLogosQuery = queryOptions({
    queryKey: ['GetLicenseLogos'],
    queryFn:GetLicenseLogos,
})