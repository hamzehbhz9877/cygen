import React, {useEffect, useState} from 'react';
import {toEnglishDigits} from "@/utils/helpers-client";
import UseQueryParams from "@/hooks/useQueryParams";
import useQueryParams from "@/hooks/useQueryParams";

const Logic = () => {
    const [from, setFrom] = useState(24000)
    const [to, setTo] = useState(40000000)
    const [input, setInput] = useState({from, to})


    const {addQueryParam} = UseQueryParams()
    const {getAllSearchParams} = useQueryParams()
    const allPrams = getAllSearchParams()

    useEffect(() => {
        if (allPrams['min_price'])
            setFrom(+allPrams['min_price'])
        if (allPrams['max_price'])
            setTo(+allPrams['max_price'])
    }, [])

    useEffect(() => {
        setInput({from,to})
    }, [to,from]);

    const handlesubmit = (e:any) => {
        e.preventDefault()
        addQueryParam("min_price", from)
        addQueryParam("max_price", to)
    }

    const handleChangeFrom = () => {
        const value = input.from
        if (value > to || value < 24000) {
            setInput({...input, from})
            setFrom(from)
        } else {
            setInput({...input, from: value})
            setFrom(value)
        }
    }


    const handleChangeTo = () => {
        const value = input.to
        if (value > 40000000 || value < from) {
            setTo(to)
            setInput({...input, to})
        } else {
            setInput({...input, to: value})
            setTo(value)
        }

    }


    const handleChangeInout = (e:any, type:string) => {
        const value = e.target.value === '' ? 0 : toEnglishDigits(e.target.value)?.replaceAll('٬', "")
        if(value===0 || Number(value))
            setInput({
                ...input,
                [type]: Number(value)
            })
    }

return {setFrom,setTo,handleChangeFrom,handleChangeTo,handleChangeInout,from,input,to,handlesubmit}
};

export default Logic;