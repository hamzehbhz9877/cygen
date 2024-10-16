import React from 'react';


// css
import "./index.scss"
import SortProducts from "@/components/filters/sort/sortProducts";
import Product from "@/components/product/single";

const AllProducts = () => {
    return (
        <div className="all-products flex-1">
            <SortProducts/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
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