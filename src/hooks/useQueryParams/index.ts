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

    const addQueryParam = (query: string, value: any,type:string="") => {

        if (nextSearchParams.get(query) && type==="array") {
            let items:any;
            const exsist = nextSearchParams.get(query)?.split(",").includes(value)
            if (exsist) {
                items = nextSearchParams.get(query)?.split(",")?.filter(data => data !== value)

            } else {
                items = [nextSearchParams.get(query), value].map((value) => `${value}`).join(',');
            }

            if (items.length === 0)
                removeQueryParam(query)
            else
                nextSearchParams.set(query, items)
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