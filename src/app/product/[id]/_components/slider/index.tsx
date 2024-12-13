import SpecialOffer from "@/components/product/specialOffer";
import Actions from "@/app/product/[id]/_components/slider/actions";
import Files from "@/app/product/[id]/_components/slider/files";
import React from "react";

const Slider = ({product}: any) => {


    return (
        <div className="slider relative">
            <SpecialOffer/>
            <Actions/>
            <Files product={product}/>
        </div>
    );
};

export default Slider;