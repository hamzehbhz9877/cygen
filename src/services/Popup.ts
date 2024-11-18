import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const GetPopups=(params:any)=>instant.get("Popup/GetPopups",{params:{...params}})

export const Popup = async () => {
    const GetPopupPositionDisplayTypes=await instant.get(`Popup/GetPopupPositionDisplayTypes`)
    const GetPopupPositionDisplayOptions=await instant.get(`Popup/GetPopupPositionDisplayOptions`)
    const GetPopupPositionDisplayPeriods=await instant.get(`Popup/GetPopupPositionDisplayPeriods`)
    const data= await Promise.all([GetPopupPositionDisplayOptions.data,GetPopupPositionDisplayTypes.data,GetPopupPositionDisplayPeriods.data])
        .then((res:any) => res)
        .catch((err) => console.error(err));
    return data
}

export const PopupQuery = queryOptions({
    queryKey: ['Popup'],
    queryFn:async ()=>{
        const res = await Popup()
        return JSON.parse(JSON.stringify(res))
    },
})

export const GetPopupQuery = queryOptions({
    queryKey: ['GetPopups'],
    queryFn:async ()=>{
        const res = await GetPopups({PictureSize:400})
        return JSON.parse(JSON.stringify(res.data))
    },
})

