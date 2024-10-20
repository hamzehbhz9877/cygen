import React from 'react';
import Color from "@/components/product/color/single";

const Colors = () => {
    return (
        <div className="prk-archive-swatches">
            {["طلایی", "بنفش", "سبز"].map((color, index: number) => {
                return <Color key={index} color={color}/>
            })}
            <div className="prk_swatches-divider">+1</div>
        </div>
    );
};

export default Colors;