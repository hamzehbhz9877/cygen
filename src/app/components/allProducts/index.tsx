import React, {Suspense} from 'react';


// css
import "./index.scss"
import SortProducts from "@/components/filters/sort/sortProducts";
import Product from "@/components/product/single";
import MobileHeadFilters from "@/components/filters/mobile";


type AllProductsType={
    AvailableSortOptions:any
    AllowProductSorting:boolean
    Products:any
}
const AllProducts = ({AllowProductSorting,AvailableSortOptions,Products}:AllProductsType) => {
    return (
        <div className="all-products flex-1">
            {AllowProductSorting?<SortProducts data={AvailableSortOptions}/>:""}
            <Suspense>
                <MobileHeadFilters/>
            </Suspense>
            <div className="overflow-hidden  lg:border solid-solid border-[#e4e4e4]
 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-[10px] lg:gap-0">
                {Products.map((d:any)=>{
                    return(
                        <Product {...d} key={d.Id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default AllProducts;