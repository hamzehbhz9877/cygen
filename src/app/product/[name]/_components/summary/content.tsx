'use client'

import React from 'react';
import Selector from "@/app/product/[name]/_components/summary/featureTypes/selector";
import {productStore} from "@/state/product/product";
import TirePrice from "@/app/product/[name]/_components/summary/featureTypes/tireprice";
import Specification from "@/app/product/[name]/_components/summary/specefication";
import Rating from "@/app/product/[name]/_components/summary/rating";
import DropdownList from "@/app/product/[name]/_components/summary/featureTypes/dropdown";
import ImageSquare from "@/app/product/[name]/_components/summary/featureTypes/imageSqure";
import {useQuery} from "@tanstack/react-query";
import {FagQuery} from "@/services/Faq";
import {GetProductCombinations} from "@/services/Product";

const Content = ({product}: any) => {
    const {setActiveTab, changeAttributes} = productStore()


    return (
        <div className="summary__content">
            <Rating product={product} setActiveTab={setActiveTab}/>
            <div className="variations mt-3">
                {
                    product.AddToCart.DisableBuyButton ? "" :
                        product.ProductAttributes.map((attr, index) => {
                            return <div className={"types"} key={index}>
                                {attr.AttributeControlType === 40 || attr.AttributeControlType === 2 ?
                                        <Selector data={attr} product={product}/> : ""}
                                {attr.AttributeControlType === 1 ?
                                        <DropdownList data={attr} product={product}/> : ""
                                }
                                {attr.AttributeControlType === 45 ?
                                        <ImageSquare data={attr} product={product}/> : ""
                                }
                            </div>
                        })
                }
                {product.AddToCart.DisableBuyButton ? "" : product.TierPrices.length > 0 ?
                    <TirePrice product={product}/> : ""}

                {product.AddToCart.DisableBuyButton ? "" :
                    <Specification product={product} setActiveTab={setActiveTab}/>}
            </div>
        </div>
    );
};

export default Content;