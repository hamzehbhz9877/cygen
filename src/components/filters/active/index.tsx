'use client'

import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import Link from "next/link";
import {IoClose} from "react-icons/io5";
import useQueryParams from "@/hooks/useQueryParams";
import {formatter} from "@/utils/helpers-client";

const ActiveFilters = () => {


    const {getAllSearchParams, removeQueryParam,addQueryParam} = useQueryParams()

    return (
        Object.entries(getAllSearchParams())?.length > 0 ?
            <div className="filter filter-active">
                <Collapse
                    isOpen
                    title={
                        <div className="filter__title">
                            <h2 className="">فیلتر های فعال:</h2>
                            <LiaAngleDownSolid size={14} color={"#000"}/>
                        </div>
                    }
                    content={
                        <div className="filter__content">
                            <ul className="filter-active__list">
                                {Object.entries(getAllSearchParams()).map((item,index) => {


                                    if (item[1].includes(",")) {
                                        return item[1].split(",").map((data,index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={"/"}>
                                                        {data}
                                                    </Link>
                                                    <IoClose className="cursor-pointer" size={13} color={"#bdbdbd"}
                                                             onClick={() => addQueryParam(item[0],data)}/>
                                                </li>
                                            )
                                        })
                                    } else {
                                        return <li key={index}>
                                            <Link href={"/"}>
                                                {item[0] === "min_price" ? "حداقل" + " " + formatter.format(Number(item[1])) + " " + "تومان" : item[0] === "max_price" ?
                                                    "حداکثر" + " " + formatter.format(Number(item[1])) + " " + "تومان" : item[1]}
                                            </Link>
                                            <IoClose className="cursor-pointer" size={13} color={"#bdbdbd"}
                                                     onClick={() => removeQueryParam(item[0])}/>
                                        </li>
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