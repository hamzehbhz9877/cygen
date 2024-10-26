'use client'

import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";


// css
import "./index.scss"
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";


type CheckBoxFilter={
    data:any
    title:string
    isOpen?:boolean
    type?:string
}
const CheckBoxFilter = ({isOpen=false,title, data,type}: CheckBoxFilter) => {

    const {addQueryParam,getAllSearchParams}=useQueryParams()

    const allParams=getAllSearchParams()

    return (
        <div className="filter filter-checkbox">
            <Collapse
                isOpen={isOpen}
                title={
                    <div className="filter__title">
                        <h2 className="">{title}</h2>
                        <LiaAngleDownSolid size={14} color={"#000"}/>
                    </div>
                }
                content={
                    <div className="filter__content">
                        <ul className="filter-checkbox__list">
                            {data.map((item:any,index:number) => {
                                return <li key={index} className={`${data.Selected?'chosen':''}`}
                                           onClick={()=>addQueryParam(type,item?.Name??item.Text,"multiple")}>
                                    <Link href={"/"} >
                                        {item?.Name??item.Text}
                                    </Link>
                                    <span className={`color bg-[${item.ColorSquaresRgb}]`}></span>
                                </li>
                            })}
                        </ul>
                    </div>
                }
            />

        </div>

    );
};

export default CheckBoxFilter;