import React from 'react';
import ProductSkeleton from "@/components/product/loader/product";

const Loading = () => {
    return (
        <div className="container">
            <div className="all-filter w-[100%] h-[40px] mb-4 bg-[#f0f0f1] rounded ">
            </div>
            <div className="all-filter w-[100%] h-[100px] mb-4 bg-[#f0f0f1] rounded ">
            </div>
            <div className={"flex justify-between"}>
                <div className="all-filter min-w-[270px] w-[300px] ml-[15px] sticky top-[105px] hidden lg:block h-[400px] mb-4 bg-[#f0f0f1] rounded
                ">
                </div>
                <div className={"flex-1"}>
                    <div className="overflow-hidden lg:border solid-solid border-[#e4e4e4] tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 xdesktop:grid-cols-4 2xl:grid-cols-5 gap-[10px]
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

export default Loading;