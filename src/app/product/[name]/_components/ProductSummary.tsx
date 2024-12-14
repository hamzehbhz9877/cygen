'use client'

import React from 'react';
import Image from "next/image";
import {CiDeliveryTruck, CiShop} from "react-icons/ci";
import {productStore} from "@/state/product/product";
import Quantity from "@/app/product/[name]/_components/summary/cart/quantity";
import {priceDiscount} from "@/helpers/client";
import {LiaShippingFastSolid} from "react-icons/lia";
import AddToCartPrice from "@/app/product/[name]/_components/summary/cart/addToCartPrice";

const ProductSummary = ({product}:any) => {


    return (
        <div className="product-summary hidden lg:block ">
            <div className="mr-10 relative">
                <div className="sticky">
                    <div
                        className="bg-neutral-100 product-summary-box mb-2 mt-5 p-4 rounded text-[12px]">
                        <div className="flex items-center text-h5 py-2">
                            <div>

                            </div>
                        </div>
                        <div className="flex image pb-3 mb-3">
                            <div className="rounded shrink-0">
                                <Image loading="lazy" width="80" height="80"
                                       className="attachment-thumbnail size-thumbnail"
                                       alt={product.DefaultPictureModel.AlternateText}
                                       title={product.DefaultPictureModel.Title}
                                       src={product.DefaultPictureModel.FullSizeImageUrl}
                                />
                            </div>
                            <div className="flex flex-col mr-5 leading-[25px]"><p
                                className="ellipsis-2 leading-[20px]">{product.Name}</p>
                                <div className="flex items-center mt-auto">
                                    <div className="w-[14px] h-[14px] rounded-[50%] bg-black"></div>
                                    <p className="mr-2">طلایی</p></div>
                            </div>
                        </div>
                        <AddToCartPrice product={product}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;