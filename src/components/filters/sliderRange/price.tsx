'use client'

import React, {useEffect, useRef, useState} from 'react';
import SliderRange from "@/components/filters/sliderRange/range";
import {FiFilter} from "react-icons/fi";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import {formatter} from "@/utils/helpers-client";
import Collapse from "@/components/collapse";
import UseQueryParams from "@/hooks/useQueryParams";
import useQueryParams from "@/hooks/useQueryParams";

const FilterByPrice = () => {

    const [from, setFrom] = useState(24000)
    const [to, setTo] = useState(40000000)

    const {addQueryParam} = UseQueryParams()

    const handlesubmit = (e) => {
        e.preventDefault()
        addQueryParam("min_price", from)
        addQueryParam("max_price", to)
    }

    const {getAllSearchParams}=useQueryParams()
    const allPrams=getAllSearchParams()


    useEffect(()=>{
        if (allPrams['min_price'])
        setFrom(+allPrams['min_price'])
        if(allPrams['max_price'])
        setTo(+allPrams['max_price'])
    },[])


    return (
        <div className="filter filter-price">
            <Collapse
                isOpen
                title={
                    <div className="filter__title">
                        <h2 className="">فیلتر بر اساس قیمت:</h2>
                        <LiaAngleDownSolid size={14} color={"#000"}/>
                    </div>}
                content={
                    <div className="filter__content">
                        <form action="" onSubmit={handlesubmit}>
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