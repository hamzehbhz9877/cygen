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
            <div>
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