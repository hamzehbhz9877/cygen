'use client'

import React, {useEffect, useRef, useState} from 'react';
import SliderRange from "@/components/filters/price/range";
import {FiFilter} from "react-icons/fi";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import {formatter, toEnglishDigits} from "@/utils/helpers-client";
import Collapse from "@/components/collapse";
import UseQueryParams from "@/hooks/useQueryParams";
import useQueryParams from "@/hooks/useQueryParams";

type Props={
    isOpen?:boolean
}
const FilterByPrice = ({isOpen=true}:Props) => {

    const [from, setFrom] = useState(24000)
    const [to, setTo] = useState(40000000)

    const [input, setInput] = useState({from, to})

    const {addQueryParam} = UseQueryParams()

    const handlesubmit = (e:any) => {
        e.preventDefault()
        addQueryParam("min_price", from)
        addQueryParam("max_price", to)
    }

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
        setInput({
            ...input,
            [type]: Number(value)
        })
    }


    const handleChangeInout = (e:any, type:string) => {
        const value = e.target.value === '' ? 0 : toEnglishDigits(e.target.value)?.replaceAll('٬', "")
        if(value===0 || Number(value))
        setInput({
            ...input,
            [type]: Number(value)
        })
    }


    return (
        <div className="filter filter-price">
            <Collapse
                isOpen={isOpen}
                title={
                    <div className="filter__title">
                        <h2 className="">فیلتر بر اساس قیمت:</h2>
                        <LiaAngleDownSolid size={14} color={"#000"}/>
                    </div>}
                content={
                    <div className="filter__content">
                        <form action="" onSubmit={handlesubmit}>

                            <div className="filter-price__inputs">
                                <div className="filter-price__input">
                                    <span>از</span>
                                    <label htmlFor="">
                                        <input value={formatter.format(input.from)}
                                               onChange={(e) => handleChangeInout(e, "from")}
                                               onBlur={handleChangeFrom} type={"text"}/>
                                    </label>
                                    <span>تومان</span>
                                </div>
                                <div className="filter-price__input">
                                    <span>تا</span>
                                    <label htmlFor="">
                                        <input value={formatter.format(input.to)}
                                               onChange={(e) => handleChangeInout(e, "to")}
                                               onBlur={handleChangeTo}
                                               type={"text"}/>
                                    </label>
                                    <span>تومان</span>
                                </div>
                            </div>

                            <SliderRange step={1000} min={24000} max={40000000} from={from} to={to}
                                         setFrom={setFrom} setTo={setTo}/>

                            <div className="filter-price__label">
                                <span className="to">{formatter.format(to) + " " + "تومان"}</span>
                                <span className="from">{formatter.format(from) + " " + "تومان"}</span>
                            </div>
                            <button type="submit" className="button">
                                <FiFilter size={22} color={"#ffffff"}/>
                                صافی
                            </button>
                        </form>
                    </div>
                }
            />

        </div>
    );
};

export default FilterByPrice;