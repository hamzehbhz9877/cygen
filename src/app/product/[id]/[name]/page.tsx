import React from 'react';
import ProductDetails from "@/app/product/[id]/_components/productDetails";
import ProductSliders from "@/components/libarary/products";
import Tabs from "@/app/product/[id]/_components/tabs";
import productDetails from "@/app/product/[id]/_components/productDetails";
import {GetProductsDetails, GetRelatedProducts} from "@/services/product";
import DImages from "@/app/product/[id]/_components/dImages";
import Breadcrumb from "@/components/breadcrumb";
import TabsMobile from "../_components/mobile/tab";
import SliderMobile from "@/app/product/[id]/_components/mobile/slider";
import ProductSummary from "@/app/product/[id]/_components/ProductSummary";


export const dynamic = "force-dynamic";
export const revalidate = 0

const Page = async ({params}:any) => {


    const product:any=await GetProductsDetails({productSeName:params.name,updateCartItemId:0})
    const relatedProducts:any=await GetRelatedProducts({productId:product.id,productThumbPictureSize:200})
    const comments:any=await GetRelatedProducts({productId:product.id})


    return (
        <div className="product-details container">
            <div className="hidden md:block mt-[20px]">
                <Breadcrumb data={product.Breadcrumb.CategoryBreadcrumb} show={product.Breadcrumb.Enabled}/>
            </div>
            <SliderMobile product={product}/>
            <ProductDetails product={product}/>
            <ProductSliders data={[]} title={"محصولات مشابه"}/>
            <TabsMobile product={product} comments={comments}/>
            <div className={"flex"}>
                <Tabs product={product} comments={comments}/>
<ProductSummary product={product}/>
            </div>
            <div className="block md:hidden mt-[20px]">
                <Breadcrumb data={product.Breadcrumb.CategoryBreadcrumb} show={product.Breadcrumb.Enabled}/>
            </div>
        </div>
    );
};

Page.header="none"

export default Page;