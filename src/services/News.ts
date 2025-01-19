import {fetchAPi} from "@//hooks/fetch";

export const NewsList = async (query: any) => {
    const {pageParam = 1, ...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/News/NewsList?PageNumber=${query.PageNumber ?? pageParam}&` + new URLSearchParams({
        ...rest
    })
})
}


export const NewsDetail = async (query: any) => {
    const {...rest}: any = query
    return await fetchAPi({url:`https://api.cygenco.com/api/News/NewsDetail?` + new URLSearchParams({
        ...rest
    })
})
}