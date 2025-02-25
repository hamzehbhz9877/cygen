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
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const ActiveFilters = ({activeFilters, AvailableManufacturers}: any) => {


    const {getAllSearchParams, removeQueryParam, addQueryParam} = useQueryParams()

    const {data} = useSuspenseQuery(GetSiteSettingsQuery)


    const searchParams = useSearchParams()

    const s1 = searchParams.get("PageNumber") ? 1 : 0
    const s2 = searchParams.get("q") ? 1 : 0
    const s3 = searchParams.get("order") ? 1 : 0
    const s4=searchParams.get("categoryId")?1:0

    return (
        searchParams.size - s1 - s2 - s3 -s4 > 0 ?
            <div className="filter filter-active">
                <Collapse
                    isOpen
                    title={
                        <div className="filter__title">
                            <h2 className="">فیلتر های فعال</h2>
                            <LiaAngleDownSolid className={"angled"} size={14} color={"#000"}/>
                        </div>
                    }
                    content={
                        <div className="filter__content">
                            <ul className="filter-active__list">
                                {Object.entries(getAllSearchParams()).map((item, index) => {
                                    // if (item[0] === 'order' && activeFilters?.AllowProductSorting) {
                                    //     return activeFilters?.AvailableSortOptions.map((data, index) => {
                                    //         if (data.Selected)
                                    //             return (
                                    //                 <li key={index}>
                                    //                     <Link href={"/"}>
                                    //                         {data.Text}
                                    //                     </Link>
                                    //                     <IoClose className="cursor-pointer" size={13} color={"#bdbdbd"}
                                    //                              onClick={() => removeQueryParam(item[0])}/>
                                    //                 </li>
                                    //             )
                                    //     })
                                    // }
                                    if (item[0] === 'price' && activeFilters?.PriceRangeFilter.Enabled) {
                                        return (
                                            <li key={index}>
                                                <Link href={"/"}>
                                                    قیمت: {" "}{formatter.format(activeFilters?.PriceRangeFilter.SelectedPriceRange.From)
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
                                        return activeFilters.SpecificationFilter.Attributes.map((data, Index) => {
                                            return data.Values.map((spec, index) => {

                                                if (spec.Selected)
                                                    return (
                                                        <li key={index}>
                                                            <Link href={"/"}>
                                                                {activeFilters.SpecificationFilter.Attributes[Index].Name}: {spec.Name}
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
                                                            برند: {data.Text}
                                                        </Link>
                                                        <IoClose className="cursor-pointer" size={13}
                                                                 color={"#bdbdbd"}
                                                                 onClick={() => addQueryParam(item[0], data.Value, 'multiple')}/>
                                                    </li>
                                                )
                                        })
                                    }

                                    // if (item[0] === 'categoryId') {
                                    //     return (
                                    //         <li key={index}>
                                    //             <Link href={"/"}>
                                    //                 دسته بندی:
                                    //             </Link>
                                    //             <IoClose className="cursor-pointer" size={13}
                                    //                      color={"#bdbdbd"}
                                    //                      onClick={() => removeQueryParam(item[0])}/>
                                    //         </li>
                                    //     )
                                    // }

                                    if (item[0] === 'manufacturerId') {
                                        return AvailableManufacturers?.map((data, index) => {
                                            if (data.Selected)
                                                return (
                                                    <li key={index}>
                                                        <Link href={"/"}>
                                                            برند:{data.Text}
                                                        </Link>
                                                        <IoClose className="cursor-pointer" size={13}
                                                                 color={"#bdbdbd"}
                                                                 onClick={() => removeQueryParam(item[0])}/>
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