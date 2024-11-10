import React from 'react';
import ProductSkeleton from "@/components/product/loader/product";

const CatalogLoader = () => {
    return (
        <div className="container">
            <div className="w-[100%] h-[40px] mb-4 bg-[#f0f0f1] rounded dark:bg-gray-700">
            </div>
            <div className="w-[100%] h-[100px] mb-4 bg-[#f0f0f1] rounded dark:bg-gray-700">
            </div>
            <div className={"flex justify-between"}>
                <div className="all-filter w-[20%] ml-[15px] sticky top-[105px] hidden lg:block h-[400px] mb-4 bg-[#f0f0f1] rounded dark:bg-gray-700
                ">
                </div>
                <div className={"flex-1"}>
                    <div className="overflow-hidden  lg:border solid-solid border-[#e4e4e4] grid
                    grid-cols-2 sm:grid-cols-3 md:grid-cols-3
                    lg:grid-cols-4  xl:grid-cols-5 gap-[10px]
                     lg:gap-0">
                        {new Array(5).fill(5).map((d: any, index) => {
                            return (
                                <ProductSkeleton key={index}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogLoader;