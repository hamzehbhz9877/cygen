import React from 'react';
import Color from "@/components/product/color/single";

const Colors = ({colors}:any) => {
    return (
        <div className="archive-swatches">
            {colors?.map((color, index: number) => {
                return <Color key={index} color={color}/>
            })}
            {
                colors?.length > 3?
            <div className="swatches-divider">+1</div>:''}
        </div>
    );
};

export default Colors;