import React from 'react';

import "./product.scss"
import useResize from "@/hooks/useResize";

const ProductSkeleton = () => {

    return (
        <div role="status" className="p-[10px] product">
            <div className="hidden sm:block">
                <div className="mb-4 lg:mb-[30px]">
                    <div className="flex items-center justify-center md:h-48 lg:h-64 bg-[#f0f0f1] rounded ">
                    </div>
                </div>
                <div className="mb-[30px]">
                    <div className="h-2.5 bg-gray-200   w-full mb-2"></div>
                    <div className="h-2.5 w-20 bg-gray-200   mb-5"></div>
                </div>
                <div className="flex flex-col items-end pb-[10px]">
                    <div className="h-2.5 w-16 bg-gray-200   mb-2"></div>
                    <div className="h-2.5 w-20 bg-gray-200   "></div>
                </div>
            </div>
            <div className="flex sm:hidden py-3">
                <div className="flex items-center justify-center h-[118px] w-[118px] me-3 bg-[#f0f0f1] rounded "></div>
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        <div className="h-2.5  bg-gray-200 mb-2"></div>
                        <div className="h-2.5 w-[70%] bg-gray-200 mb-5"></div>
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex gap-4 justify-between">
                        <div className="h-2.5 w-full  bg-gray-200"></div>
                        <div className="h-2.5 w-full bg-gray-200   "></div>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default ProductSkeleton;