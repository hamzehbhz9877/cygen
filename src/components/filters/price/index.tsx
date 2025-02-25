'use client'

import React, {useEffect, useRef, useState} from 'react';
import SliderRange from "@/components/filters/price/range";
import {FiFilter} from "react-icons/fi";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import {formatter, toEnglishDigits} from "@/helpers/client";
import Collapse from "@/components/collapse";
import UseQueryParams from "@/hooks/useQueryParams";
import useQueryParams from "@/hooks/useQueryParams";
import Logic from "@/components/filters/price/logic";

type FilterByPriceType = {
    isOpen?: boolean
    data?: any
}
const FilterByPrice = ({isOpen = true, data}: FilterByPriceType) => {

    const {
        to,
        from,
        handleChangeFrom,
        handleChangeTo,
        handleChangeInout,
        handlesubmit,
        input,
        setFrom,
        setTo
    } = Logic(data)

    return (
        <div className="filter filter-price">
            <Collapse
                isOpen={isOpen}
                title={
                    <div className="filter__title">
                        <h2 className="">محدوده قیمت</h2>
                        <LiaAngleDownSolid className={"angled"} size={14} color={"#000"}/>
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
                            <SliderRange step={1000} min={data?.AvailablePriceRange.From} max={data?.AvailablePriceRange.To} from={from} to={to}
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