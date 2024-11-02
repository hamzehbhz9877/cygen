import {instant} from "@/services/httpservice";


// type ProductsListByCategory = {
//     categoryId: number
// }

export const ProductsListByCategory = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Catalog/Category?PageNumber=${pageParam}&` + new URLSearchParams({
        ...rest
    }).toString())
    const data = await res.json()
    return data
}
