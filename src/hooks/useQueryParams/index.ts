'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const UseQueryParams = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const nextSearchParams = new URLSearchParams(searchParams.toString())

    const removeQueryParam = (query: string) => {
        nextSearchParams.delete(query)
        router.push(`${pathname}?${nextSearchParams}`)
    }

    const addQueryParam = (query: string, value: any, type?:any) => {

        if (nextSearchParams.get(query) && type === "multiple") {
            let queryData;
            const dataQuery = nextSearchParams.get(query)?.split(",")
            if (dataQuery.includes(value.toString())) {
                queryData=dataQuery?.filter(data => +data !== +value)
            } else {
                queryData=[...dataQuery,value]
            }
            if (queryData.length === 0)
                removeQueryParam(query)
            else
                nextSearchParams.set(query, queryData.toString())
        } else {
            nextSearchParams.set(query, value)
        }
        router.push(decodeURIComponent(`${pathname}?${nextSearchParams}`))
    }

    function getAllSearchParams() {
        const params: { [anyProp: string]: string } = {};

        searchParams.forEach((value, key) => {
            params[key] = value;
        });

        return params;
    };

    return {addQueryParam, removeQueryParam, getAllSearchParams}
};

export default UseQueryParams;