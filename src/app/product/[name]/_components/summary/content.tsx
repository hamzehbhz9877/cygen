'use client'

import React from 'react';
import Selector from "@/app/product/[name]/_components/summary/featureTypes/selector";
import {productStore} from "@/state/product/product";
import TirePrice from "@/app/product/[name]/_components/summary/featureTypes/tireprice";
import Specification from "@/app/product/[name]/_components/summary/specefication";
import Rating from "@/app/product/[name]/_components/summary/rating";
import DropdownList from "@/app/product/[name]/_components/summary/featureTypes/dropdown";
import ImageSquare from "@/app/product/[name]/_components/summary/featureTypes/imageSqure";

const Content = ({product}: any) => {
    const {setActiveTab} = productStore()
    return (
        <div className="summary__content">
            <Rating product={product} setActiveTab={setActiveTab}/>

            <div className="variations mt-3">
                {
                    product.AddToCart.DisableBuyButton ? "" :
                        product.ProductAttributes.map((attr, index) => {
                            return <div className={"types"} key={index}>
                                {attr.AttributeControlType === 40 || attr.AttributeControlType === 2 ?
                                    <Selector data={attr}/> : ""}
                                {attr.AttributeControlType === 1?
                                    <DropdownList data={attr}/>:""
                                }
                                {attr.AttributeControlType === 45?
                                    <ImageSquare data={attr}/>:""
                                }
                            </div>
                        })
                }

                {product.AddToCart.DisableBuyButton?"":product.TierPrices.length > 0 ? <TirePrice product={product}/> : ""}


                {product.AddToCart.DisableBuyButton?"":<Specification product={product} setActiveTab={setActiveTab}/>}


            </div>
        </div>
    );
};

export default Content;