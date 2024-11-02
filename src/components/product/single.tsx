
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


const Product = ({Name, MarkAsNew, ProductPrice, PictureModels}: any) => {
    return (
        <div className="product">
            <div className="product-box-inner">
                <div className="info-product">
                    <Link href="/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <Colors/>
                        <SpecialOffer/>
                        <Images data={PictureModels}/>
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

export default Product;