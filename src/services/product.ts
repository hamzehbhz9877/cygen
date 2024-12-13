import {redirectStatus} from "@/utils/notFound-server";



export const GetProductsDetails = async (query: any) => {
    const {...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Product/ProductDetails?` + new URLSearchParams({
        ...rest
    }).toString(), {cache: 'no-store'})
    const data = await res.json()
    return redirectStatus(data)
}

export const GetRelatedProducts = async (query: any) => {
    const {...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Product/GetRelatedProducts?` + new URLSearchParams({
        ...rest
    }).toString(), {cache: 'no-store'})
    const data = await res.json()
    return redirectStatus(data)
}

export const GetComments = async (query: any) => {
    const {...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Product/GetProductReviews?` + new URLSearchParams({
        ...rest
    }).toString(), {cache: 'no-store'})
    const data = await res.json()
    return redirectStatus(data)
}
