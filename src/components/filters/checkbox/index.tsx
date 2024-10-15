'use client'

import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";


type Props = {
    title: string
    data: Array<any>
    isOpen?:boolean
}

// css
import "./index.scss"
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

const CheckBoxFilter = ({isOpen=false,title, data}: Props) => {

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
                            {data.map(item => {
                                return <li className={`${allParams['filter_color-selector']?.includes(item)?'chosen':''}`} onClick={()=>addQueryParam('filter_color-selector',item)}>
                                    <Link href={"/"} >
                                        {item}
                                    </Link>
                                    <span className="color" ></span>
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