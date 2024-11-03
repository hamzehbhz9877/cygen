
export const ProductsListByCategory = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Catalog/Category?PageNumber=${query.PageNumber??pageParam}&` + new URLSearchParams({
        ...rest
    }).toString(),{ cache: 'no-store' })
    const data = await res.json()
    return data
}
export const ProductsListByManufacturer = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Catalog/Manufacturer?PageNumber=${query.PageNumber??pageParam}&` + new URLSearchParams({
        ...rest
    }).toString(),{ cache: 'no-store' })
    const data = await res.json()
    return data
}

export const ProductsListByGetTagProducts = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    const res = await fetch(`https://api.cygenco.com/api/Catalog/GetTagProducts?PageNumber=${query.PageNumber??pageParam}&` + new URLSearchParams({
        ...rest
    }).toString(),{ cache: 'no-store' })
    const data = await res.json()
    return data
}
