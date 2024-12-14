'use client'

import React from 'react';
import Link from "next/link";
import SpecialOffer from "@/components/product/specialOffer";
import Images from "@/components/product/images";
import Price from "@/components/product/price";
import Label from "@/components/product/label";
import Title from "@/components/product/title";
import Colors from "@/components/product/color/list";


// css
import "./index.scss"
import ProductRow from "@/components/product/row";
import useResize from "@/hooks/useResize";


const Product = ({Name, SeName, MarkAsNew,row=true, Sku, ProductPrice, PictureModels, ProductSpecificationModel}: any) => {

    const {windowWidth} = useResize()

    if (windowWidth >= 640 || !row) {
        return <div className="product">
            <div className="product-box-inner">
                <div className="info-product">
                    <Link href={`/product/${SeName}`}
                          className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <div className="mb-1 pt-[8px]">
                            {ProductPrice.DiscountRemainingTotalSeconds ?
                                <div className="flex flex-col items-center justify-start pb-[1rem]">
                                    <SpecialOffer offers={ProductPrice.DiscountRemainingTotalSeconds}/>
                                    <div
                                        className="h-[3px] rounded-[10px] lg:h-1 bg-dynamic-color-from w-full"></div>
                                </div>
                                : <div className="mb-[30px]"><br/></div>}
                        </div>
                        <Images offer={ProductPrice.DiscountRemainingTotalSeconds} data={PictureModels}/>
                        <Title title={Name}/>
                        <div className="flex-1"/>
                        <Price {...ProductPrice}/>
                    </Link>
                </div>
                <Colors colors={ProductSpecificationModel.Groups[0].Attributes[0]?.Values}/>
                {MarkAsNew ? <Label/> : ""}
            </div>
        </div>
    } else {
        return <div className="product row">
            <div className="product-box-inner ">

                <div className="info-product">
                    <Link href={`/product/${SeName}`}
                          className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <div className="mb-1 offers">
                            {ProductPrice.DiscountRemainingTotalSeconds ?
                                    <div className="flex flex-col items-center justify-start pb-[1rem]">
                                        <SpecialOffer offers={ProductPrice.DiscountRemainingTotalSeconds}/>
                                        <div
                                            className="h-[3px] rounded-[10px] lg:h-1 bg-dynamic-color-from w-full"></div>
                                    </div>
                                    : <br/>}
                        </div>
                        <div className="flex justify-between">
                            <div className={"me-3"}>
                                <Images offer={ProductPrice.DiscountRemainingTotalSeconds} data={PictureModels}/>
                                <Colors colors={ProductSpecificationModel.Groups[0].Attributes[0]?.Values}/>
                            </div>
                            <div className={"flex flex-col justify-between"}>
                                <Title title={Name}/>
                                {MarkAsNew ? <Label/> : ""}
                                <div className="flex-1"/>
                                <Price {...ProductPrice}/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    }
};

export default Product;