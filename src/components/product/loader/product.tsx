import React from 'react';

import "./product.scss"

const ProductSkeleton = () => {
    return (
        <div role="status" className="p-[10px] product">
            <div>
                <div className="flex items-center justify-center h-32  md:h-48 mb-4 bg-[#f0f0f1] rounded ">
                </div>
                <div className="h-2.5 bg-gray-200   w-full mb-2"></div>
                <div className="h-2.5 w-20 bg-gray-200   mb-5"></div>

                <div className="flex flex-col items-end pb-[10px]">
                    <div className="h-2.5 w-16 bg-gray-200   mb-2"></div>
                    <div className="h-2.5 w-20 bg-gray-200   "></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;