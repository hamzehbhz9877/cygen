'use client'

import React, {useEffect, useState} from 'react';
import {productStore} from "@/state/product/product";
import {TiTick} from "react-icons/ti";
import {colorIsDarkSimple} from "@/helpers/client";
import Image from "next/image";

const ImageSquare = ({data}: any) => {

    const [select, setSelect] = useState(data.DefaultValue);

    useEffect(() => {
        const preSelected = data.Values.find(d => d.IsPreSelected)
        if (preSelected) {
            setSelect(preSelected.Name);
        }
    }, []);


    return (
        <>
            <label className={"mb-[5px] inline-block"}>{data.TextPrompt?data.TextPrompt: data.Name}</label>
            <div className="thwvsf_fields">
                <ul className="thwvsf-wrapper-ul imageSquare">
                    {
                        data.Values.map((value, index) => {
                            return <li key={index}
                                       className={`cursor-pointer ${(select === value.Name) ? 'selected' : ""}`}
                                       onClick={() => {
                                           setSelect(value.Name)
                                       }}>
                                <Image loading="lazy" width="40" height="40"
                                       className="attachment-thumbnail size-thumbnail"
                                       alt={value.ImageSquaresPictureModel.AlternateText}
                                       title={value.ImageSquaresPictureModel.Title}
                                       src={value.ImageSquaresPictureModel.FullSizeImageUrl}
                                />
                            </li>
                        })}
                </ul>
            </div>
        </>

    );
};

export default ImageSquare;