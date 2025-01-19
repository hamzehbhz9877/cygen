import {instant} from "@/services/httpservice";
import {fetchAPi} from "@/hooks/fetch";


export const ProductsListByCategory = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/Catalog/Category?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
        ...rest
    })
})
}

export const ProductsListBySearch = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    return await fetchAPi({url:`
    https://api.cygenco.com/api/Catalog/Search?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
            ...rest
        }
    )
})
}

export const ProductsListByManufacturer = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
     return await fetchAPi({url:`https://api.cygenco.com/api/Catalog/Manufacturer?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
         ...rest
     })
})
}

export const ProductsListByGetTagProducts = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/Catalog/Tag?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
        ...rest
    })
})
}


export const SearchTermAutoComplete = ({
                                           search,
                                           sizeOfImage
                                       }) => instant.get(`Catalog/SearchTermAutoComplete?term=${search}&productThumbPictureSize=${sizeOfImage}`)

