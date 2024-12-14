import React from 'react';
import ProductSkeleton from "./product";

const ProductsSkeleton = () => {
    return (
        <div className="overflow-hidden  lg:border solid-solid border-[#e4e4e4] grid
                           grid-cols-2 sm:grid-cols-3 md:grid-cols-3
                           lg:grid-cols-3  xl:grid-cols-4 gap-[10px]
                            lg:gap-0">
            {new Array(5).fill(5).map((d: any, index) => {
                return (
                    <ProductSkeleton key={index}/>
                )
            })}
        </div>
    );
};

export default ProductsSkeleton;