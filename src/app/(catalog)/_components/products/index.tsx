import React, {Suspense} from 'react';


import Product from "@/components/product/single";
import ProductSkeleton from "@/components/product/loader/product";
import ProductsSkeleton from "@/components/product/loader/products";


type ProductsType = {
    Products: any
    isRefetching:boolean
    isFetchingNextPage:boolean
}

const Products = ({Products,isRefetching,isFetchingNextPage}: ProductsType) => {
    return (
        <div className="all-products flex-1">
            <div className="overflow-hidden lg:border solid-solid border-[#e4e4e4]
 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-5 gap-[10px] lg:gap-0">
                {Products.map((d: any) => {
                        return <Product {...d} key={d.Id}/>
                })}
                {
                    isRefetching||isFetchingNextPage?  new Array(5).fill(5).map((d: any, index) => {
                        return (
                            <ProductSkeleton key={index}/>
                        )
                    }):""
                }
            </div>

        </div>
    );
};

export default Products;