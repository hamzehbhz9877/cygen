import {notFound} from "next/navigation";

export const redirectStatus=(data)=>{
    // console.log(data?.CatalogProductsModel?.Products?.length===0)

    if (data.status===404)
        return notFound()
    else return data
}