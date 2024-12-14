import {fetchAPi} from "@/hooks/fech";

export const BlogList = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    return await fetchAPi(`https://api.cygenco.com/api/Blog/BlogList?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
        ...rest
    }))
}


export const BlogDetail = async (query: any) => {
    const {...rest}: any = query
    return await fetchAPi(`https://api.cygenco.com/api/Blog/BlogDetail?` + new URLSearchParams({
        ...rest
    }))
}