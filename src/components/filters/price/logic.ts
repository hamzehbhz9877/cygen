import React, {useEffect, useState} from 'react';
import {toEnglishDigits} from "@/helpers/client";
import UseQueryParams from "@/hooks/useQueryParams";
import useQueryParams from "@/hooks/useQueryParams";

const Logic = (data: any) => {

    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [input, setInput] = useState({from, to})

    useEffect(() => {
        setFrom(data?.AvailablePriceRange.From)
        setTo(data?.AvailablePriceRange.To)
    }, [data?.AvailablePriceRange])


    const {addQueryParam} = UseQueryParams()

    useEffect(() => {
        setFrom(data?.SelectedPriceRange.From)
        setTo(data?.SelectedPriceRange.To)
    }, [data?.SelectedPriceRange])

    useEffect(() => {
        setInput({from, to})
    }, [to, from]);

    const handlesubmit = (e: any) => {
        e.preventDefault()
        addQueryParam("price", from + "-" + to)
    }

    const handleChangeFrom = () => {
        const value = input.from
        if (value > to || value < data?.AvailablePriceRange.From) {
            setInput({...input, from})
            setFrom(from)
        } else {
            setInput({...input, from: value})
            setFrom(value)
        }
    }


    const handleChangeTo = () => {
        const value = input.to
        if (value > data?.AvailablePriceRange.To || value < from) {
            setTo(to)
            setInput({...input, to})
        } else {
            setInput({...input, to: value})
            setTo(value)
        }

    }


    const handleChangeInout = (e: any, type: string) => {
        const value = e.target.value === '' ? 0 : toEnglishDigits(e.target.value)?.replaceAll('٬', "")
        if (value === 0 || Number(value))
            setInput({
                ...input,
                [type]: Number(value)
            })
    }

    return {setFrom, setTo, handleChangeFrom, handleChangeTo, handleChangeInout, from, input, to, handlesubmit}
};

export default Logic;