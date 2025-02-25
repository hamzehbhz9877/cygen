import {instant} from "@/services/httpservice";

export const   GetAnywhereVideos = async (params: any) =>
    instant.get(`AnyWhereVideo/GetAnywhereVideos`,{params:{...params}})

        // [
        // {
        //     "Key": 1,
        //     "Value": "Iframe"
        // },
        //     {
        //         "Key": 2,
        //         "Value": "Address"
        //     }
        // ]