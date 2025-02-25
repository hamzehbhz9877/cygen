import React, {useEffect, useState} from 'react';
import {FaAngleDown} from "react-icons/fa6";
import {useMutation} from "@tanstack/react-query";
import {ProductDetailsAttributeChange} from "@/services/ShoppingCart";
import {productStore} from "@/state/product/product";
import Logic from "@/app/product/[name]/_components/summary/featureTypes/logic";

const DropdownList = ({data, product}) => {


    const {variety, setVariety, changeAttributes,changes} = productStore(d => d);
    const {select,setSelect}=Logic(data)

    if (changeAttributes?.disabledattributemappingids?.some(d => d === data.Id))
        return null
    return (
        <div>
            <label className={"mb-[5px] inline-block"}>{data.TextPrompt ? data.TextPrompt : data.Name}</label>
            <div className="max-w-sm w-[200px]">
                <div className="relative">
                    <FaAngleDown size={15} stroke="currentColor"
                                 className="h-3 w-3 ml-1 absolute top-3.5 left-2 text-slate-700"/>
                    <select value={select} onChange={(e) => {
                        const change = JSON.parse(JSON.stringify(changes));
                        const findIndex = change.findIndex(d => d.Id === data.Id)
                        if (findIndex > -1) {
                            change[findIndex].ValueIds = [+e.target.value]
                            setVariety(change);
                        }
                        // setSelect(e.target.value)
                    }}
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700
                             text-sm  rounded-[11px] border-[2px] border-dynamic-color-from pl-1 pr-3 py-2 transition duration-300 ease
                             focus:outline-none focus:border-slate-400 hover:border-dynamic-color-from shadow-sm focus:shadow-md
                             appearance-none cursor-pointer">
                        {data.Values.map((d, i) => {
                            return (
                                <option className="hover:bg-dynamic-color-from" key={i}
                                        value={d.Id}>{d.Name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DropdownList;