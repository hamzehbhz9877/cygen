import {instant} from "@/services/httpservice";


type ProductsListByCategory = {
    categoryId: number
}

export const ProductsListByCategory =async (query: ProductsListByCategory) => {
    const {categoryId} = query

    const data=await instant.get(`Catalog/ProductsListByCategory?categoryId=${categoryId}`)
    return data.data
}
