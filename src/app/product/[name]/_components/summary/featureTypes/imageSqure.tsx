'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {productStore} from "@/state/product/product";
import {useMutation} from "@tanstack/react-query";
import {ProductDetailsAttributeChange} from "@/services/ShoppingCart";
import Logic from "@/app/product/[name]/_components/summary/featureTypes/logic";

const ImageSquare = ({data, product}: any) => {


    const { setVariety, changeAttributes,changes} = productStore(d => d);
    const {select,setSelect}=Logic(data)


    if (changeAttributes?.disabledattributemappingids?.some(d => d === data.Id))
        return null
    else
        return (
            <>
                <label className={"mb-[5px] inline-block"}>{data.TextPrompt ? data.TextPrompt : data.Name}</label>
                <div className="thwvsf_fields">
                    <ul className="thwvsf-wrapper-ul imageSquare">
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
                                               } else {
                                                   setVariety([...changes, {Id: data.Id, ValueIds: [value.Id]}]);
                                               }
                                               // setSelect(value.Id)
                                           }}>
                                    <Image loading="lazy" width="40" height="40"
                                           className="attachment-thumbnail size-thumbnail"
                                           alt={value.ImageSquaresPictureModel.AlternateText ?? ""}
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