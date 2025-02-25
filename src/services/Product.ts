import {fetchAPi} from "@/hooks/fetch";
import {instant} from "@/services/httpservice";


export const GetProductsDetails = async (query: any) => {
    const {...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/Product/ProductDetails?` + new URLSearchParams({
        ...rest
    })
})
}

export const GetRelatedProducts = async (query: any) => {
    const {...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/Product/GetRelatedProducts?` + new URLSearchParams({
        ...rest
    })
})
}
export const GetProductCombinations =  (id) =>
    instant.get(`Product/GetProductCombinations?productId=${id}`)

export const GetComments =(id)=>instant.get(`Product/GetProductReviews?productId=${id}`)
export const AddHelpfulness =({id, wasHelpful})=>
    instant.post(`Product/SetProductReviewHelpfulness?productReviewId=${id}&wasHelpful=${wasHelpful}`)

export const AddComments = (data) => instant.post('Product/AddProductReview',data)


