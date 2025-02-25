'use client'
import React from 'react';
import Link from "next/link";
import {productStore} from "@/state/product/product";

const Title = ({product}:any) => {
    const {changeAttributes}=productStore(d=>d)

    return (
        <div className="title_compleates flexed_start">
            <div className="boxed_title">
                <div className="breadcrumb">
                    <Link href={`/category/${product.Breadcrumb.CategoryBreadcrumb[0].SeName}`}>{product.Breadcrumb.CategoryBreadcrumb[0].Name}</Link>
                    {
                        product.ProductManufacturers.length > 0 ?
                            <span className="inline-block mx-1 text-dynamic-color-from">/</span>:""
                    }

                    <Link href={`/manufacture/${product.ProductManufacturers[0]?.SeName}`}>{product.ProductManufacturers[0]?.Name}</Link>
                </div>
                <h1 className="product_title entry-title">{product?.Name}</h1>
               <div className="flex flex-wrap gap-x-[10px] mb-3">
                   {
                       product.ShowSku && product.Sku ? <div className="product_meta">
                        <span className="sku_wrapper">شناسه محصول: <span className="sku"
                                                                         data-o_content="apple-13pak#-1">{changeAttributes?.sku??product.Sku}</span></span>
                       </div> : ""
                   }
                   {
                       product.ShowManufacturerPartNumber && product.ManufacturerPartNumber ? <div className="product_meta">
                        <span className="sku_wrapper">شناسه برند: <span className="sku"
                                                                        data-o_content="apple-13pak#-1">{changeAttributes?.manufacturerPartNumber??product.ManufacturerPartNumber}</span></span>
                       </div> : ""
                   }

                   {
                       product.ShowGtin && product.Gtin ? <div className="product_meta">
                        <span className="sku_wrapper">پارت نامبر: <span className="sku"
                                                                        data-o_content="apple-13pak#-1">{changeAttributes?.gtin??product.Gtin}</span></span>
                       </div> : ""
                   }
               </div>
                {
                    product.ProductTags.length > 0 ?
                        <div className={"tag mb-3"}>
                            <ul className={"flex items-center flex-wrap gap-[10px]"}>
                                {product.ProductTags.map(tag => {
                                    return <li key={tag.Id}
                                               className={"bg-gray-100 text-gray-800 text-xs font-medium px-[13px] py-[6px] rounded-full"}>
                                        <Link href={`/tag/${tag.Name}`}>{tag.Name}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>:""
                }

            </div>
        </div>

    );
};

export default Title;