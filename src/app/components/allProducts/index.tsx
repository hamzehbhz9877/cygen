import React, {Suspense} from 'react';


// css
import "./index.scss"
import SortProducts from "@/components/filters/sort/sortProducts";
import Product from "@/components/product/single";
import MobileHeadFilters from "@/components/filters/mobile";

const AllProducts = () => {
    return (
        <div className="all-products flex-1">
            <SortProducts/>
            <Suspense>
                <MobileHeadFilters/>
            </Suspense>

            <div className="overflow-hidden  lg:border solid-solid border-[#e4e4e4]
 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-[10px] lg:gap-0">
                {new Array(12).fill(0).map((d,index)=>{
                    return(
                        <Product key={index}/>
                    )
                })}
            </div>
        </div>
    );
};

export default AllProducts;