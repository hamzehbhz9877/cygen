import React from 'react';

import AddToCart from "@/app/product/[name]/_components/summary/cart/addToCart";

const AddToCartFloat = ({product}) => {

    return (
        <div
            className="back_holder  addtocart !flex justify-between fixed bottom-0 right-0 left-0 z-[100] bg-white">
            <div className={"w-full"}>
                <AddToCart product={product}/>
            </div>
        </div>
    );
};

export default AddToCartFloat;