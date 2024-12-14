import SpecialOffer from "@/components/product/specialOffer";
import Actions from "@/app/product/[name]/_components/slider/actions";
import Files from "@/app/product/[name]/_components/slider/files";
import React from "react";

const Slider = ({product}: any) => {


    return (
        <div className="slider relative">
            {product.ProductPrice.DiscountRemainingTotalSeconds?
            <SpecialOffer offers={product.ProductPrice.DiscountRemainingTotalSeconds}/>:""}
            <Actions product={product}/>
            <Files product={product}/>
        </div>
    );
};

export default Slider;