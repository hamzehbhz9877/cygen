'use client'

import React, {useEffect, useState} from 'react';
import {productStore} from "@/state/product/product";
import {TiTick} from "react-icons/ti";
import {colorIsDarkSimple} from "@/helpers/client";
import {useMutation} from "@tanstack/react-query";
import {ProductDetailsAttributeChange} from "@/services/ShoppingCart";
import Logic from "@/app/product/[name]/_components/summary/featureTypes/logic";

const Selector = ({data, product}: any) => {


    const { setVariety, changeAttributes,changes} = productStore(d => d);
    const {select,setSelect}=Logic(data)


    const {setImage} = productStore()

    if (changeAttributes?.disabledattributemappingids?.some(d => d === data.Id))
        return null
    return (
        <>
            <label className={"mb-[5px] inline-block"}>{data.TextPrompt ? data.TextPrompt : data.Name}</label>
            <div className="thwvsf_fields">
                <ul className="thwvsf-wrapper-ul">
                    {
                        data.Values.map((value, index) => {
                            return <li key={index}
                                       className={`cursor-pointer ${(select === value.Id) ? 'selected' : ""}`}
                                       onClick={() => {
                                           const change = JSON.parse(JSON.stringify(changes));
                                           const findIndex = change.findIndex(d => d.Id === data.Id)
                                           if (findIndex > -1) {
                                               change[findIndex].ValueIds = [value.Id]
                                               setVariety(change);
                                           }
                                           // setSelect(value.Id)
                                           if (data.AttributeControlType === 40)
                                               setImage(value.PictureId)
                                       }}><span
                                className="tooltiptext">{value.Name}</span>
                                {
                                    data.AttributeControlType === 40 ?
                                        <span className={`thwvsf-item-span thwvsf-item-span `}
                                              style={{backgroundColor: value.ColorSquaresRgb}}
                                        >
                                        <TiTick color={colorIsDarkSimple(value.ColorSquaresRgb) ? '#FFFFFF' : '#000000'}
                                                size={20} className={"icon"}/>
                                        </span> : ""
                                }

                            </li>
                        })}
                </ul>
            </div>
        </>

    );
};

export default Selector;