'use client'

import {usePathname, useRouter, useSearchParams} from "next/navigation";

const UseQueryParams = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const nextSearchParams = new URLSearchParams(searchParams.toString())

    const removeQueryParam = (query: string) => {
        nextSearchParams.delete(query)
        router.replace(`${pathname}?${nextSearchParams}`)
    }

    const addQueryParam = (query: string, value: any) => {

        nextSearchParams.set(query, value)

        router.replace(`${pathname}?${nextSearchParams}`)

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