'use client'

import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import Link from "next/link";
import {IoClose} from "react-icons/io5";
import useQueryParams from "@/hooks/useQueryParams";
import {formatter} from "@/helpers/client";
import {useSearchParams} from "next/navigation";

const ActiveFilters = ({activeFilters}: any) => {


    const {getAllSearchParams, removeQueryParam, addQueryParam} = useQueryParams()

    const searchParams=useSearchParams()

    return (
        (searchParams.get("PageNumber")?searchParams.size-1:searchParams.size) > 0 ?
            <div className="filter filter-active">
                <Collapse
                    isOpen
                    title={
                        <div className="filter__title">
                            <h2 className="">فیلتر های فعال</h2>
                            <LiaAngleDownSolid size={14} color={"#000"}/>
                        </div>
                    }
                    content={
                        <div className="filter__content">
                            <ul className="filter-active__list">
                                {Object.entries(getAllSearchParams()).map((item, index) => {
                                    if (item[0] === 'order' && activeFilters?.AllowProductSorting) {
                                        return activeFilters?.AvailableSortOptions.map((data, index) => {
                                            if (data.Selected)
                                                return (
                                                    <li key={index}>
                                                        <Link href={"/"}>
                                                            {data.Text}
                                                        </Link>
                                                        <IoClose className="cursor-pointer" size={13} color={"#bdbdbd"}
                                                                 onClick={() => removeQueryParam(item[0])}/>
                                                    </li>
                                                )
                                        })
                                    }
                                    if (item[0] === 'price' && activeFilters?.PriceRangeFilter.Enabled) {
                                        return (
                                            <li key={index}>
                                                <Link href={"/"}>
                                                    {formatter.format(activeFilters?.PriceRangeFilter.SelectedPriceRange.From)
                                                        + "-" +
                                                        formatter.format(activeFilters?.PriceRangeFilter.SelectedPriceRange.To)
                                                        +
                                                        " تومان "
                                                    }
                                                </Link>
                                                <IoClose className="cursor-pointer" size={13} color={"#bdbdbd"}
                                                         onClick={() => removeQueryParam(item[0])}/>
                                            </li>
                                        )
                                    }
                                    if (item[0] === 'specifications' && activeFilters?.SpecificationFilter?.Enabled) {
                                        return activeFilters.SpecificationFilter.Attributes.map((data) => {
                                            return data.Values.map((spec,index) => {

                                                if (spec.Selected)
                                                    return (
                                                        <li key={index}>
                                                            <Link href={"/"}>
                                                                {spec.Name}
                                                            </Link>
                                                            <IoClose className="cursor-pointer" size={13}
                                                                     color={"#bdbdbd"}
                                                                     onClick={() => addQueryParam(item[0], spec.Id, 'multiple')}/>
                                                        </li>
                                                    )
                                            })
                                        })
                                    }
                                    if (item[0] === 'manufacturers' && activeFilters?.ManufacturerFilter?.Enabled) {
                                        return activeFilters.ManufacturerFilter.Manufacturers.map((data, index) => {
                                            if (data.Selected)
                                                return (
                                                    <li key={index}>
                                                        <Link href={"/"}>
                                                            {data.Text}
                                                        </Link>
                                                        <IoClose className="cursor-pointer" size={13}
                                                                 color={"#bdbdbd"}
                                                                 onClick={() => addQueryParam(item[0], data.Value, 'multiple')}/>
                                                    </li>
                                                )
                                        })
                                    }
                                })}
                            </ul>
                        </div>
                    }
                />

            </div> : ""

    )
};

export default ActiveFilters;