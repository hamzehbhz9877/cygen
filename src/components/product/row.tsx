
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


const ProductRow = ({Name,SeName, MarkAsNew,Sku, ProductPrice, PictureModels,ProductSpecificationModel}: any) => {
    return (
        <div className="product ">
            <div className="product-box-inner block sm:hidden">
                <div className="info-product">
                    <Link href={`/product/${SeName}`} className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <Colors colors={ProductSpecificationModel.Groups[0].Attributes[0]?.Values}/>
                        {ProductPrice.DiscountRemainingTotalSeconds ?
                            <SpecialOffer offers={ProductPrice.DiscountRemainingTotalSeconds}/> : ""}
                        {ProductPrice.DiscountRemainingTotalSeconds?
                            <div className="h-[3px] rounded-[10px] lg:h-1 bg-dynamic-color-from w-full"></div>:""}
                        <Images offer={ProductPrice.DiscountRemainingTotalSeconds} data={PictureModels}/>
                    </Link>
                    <Title title={Name}/>
                    <div className="flex-1"/>
                    <Price {...ProductPrice}/>
                </div>
                {MarkAsNew ? <Label/> : ""}
            </div>
        </div>
    );
};

export default ProductRow;