'use client'

import React from 'react';
import Addtocart from "@/layout/header/mobile/addtocart";
import {usePathname} from "next/navigation";
import {productStore} from "@/state/product/product";
import ProductMobileHeader from "@/layout/header/mobile/productDetails/productMobileHeader";

const AddToCartMobile = ({product}) => {
    const pathname = usePathname()
    const {productNotFound} = productStore()

    return (
        <>
            {
                product.AddToCart.DisableBuyButton || !product.InStock ?"":<div
                className={`${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'addtocart-wrapper' : 'hidden'} `}>
                <Addtocart product={product}/>
                </div>
                }


            <div
                className={`productDetails-def ${!productNotFound && decodeURIComponent(pathname).includes('product') ? 'productDetails-more' : ''}`}>
                <ProductMobileHeader product={product}/>
            </div>
        </>

    );
};

export default AddToCartMobile;