import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";
import {redirectStatus} from "@/utils/notFound-server";
import axios from "axios";


// export const GetAnywherePicturePositions = async () => instant.get('AnyWherePicture/GetAnywherePicturePositions')

export const GetAnywherePictures = async (params: any) =>instant.get(`AnyWherePicture/GetAnywherePictures`,{params:{...params}})

// export const GetAnywherePicturePositionsQuery = queryOptions({
//     queryKey: ['GetAnywherePicturePositions'],
//     queryFn:async ()=>{
//         const res = await GetAnywherePicturePositions()
//         return JSON.parse(JSON.stringify(res.data))
//     },
// })
//

