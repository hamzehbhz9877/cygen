'use client'

import React, {useEffect, useState} from 'react';
import {productStore} from "@/state/product/product";
import {TiTick} from "react-icons/ti";

const Selector = ({data}: any) => {

    const [select, setSelect] = useState(data.DefaultValue);

    useEffect(() => {
        const preSelected = data.Values.find(d => d.IsPreSelected)
        if (preSelected) {
            setSelect(preSelected.Name);
            if (data.AttributeControlType === 40)
            setImage(preSelected.PictureId);
        }
    }, []);


    const {setImage} = productStore()

    return (
        <>
            <label className={"mb-[5px] inline-block"}>{data.Name}</label>
            <div className="thwvsf_fields">
                <ul className="thwvsf-wrapper-ul">
                    {
                        data.Values.map((value, index) => {
                            return <li key={index}
                                       className={`cursor-pointer ${(select === value.Name) ? 'selected' : ""}`}
                                       onClick={() => {
                                           setSelect(value.Name)
                                           if ( data.AttributeControlType === 40)
                                           setImage(value.PictureId)
                                       }}><span
                                className="tooltiptext">{value.Name}</span>
                                {
                                    data.AttributeControlType === 40 ?
                                        <span className={`thwvsf-item-span thwvsf-item-span `}
                                              style={{backgroundColor: value.ColorSquaresRgb}}
                                        >
                                        <TiTick color={"white"} size={20} className={"icon"}/>
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