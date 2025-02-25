import React from 'react';
import ProductDetails from "@/app/product/[name]/_components/productDetails";
import ProductSliders from "@/components/libarary/products";
import Tabs from "@/app/product/[name]/_components/tabs";
import {GetComments, GetProductsDetails, GetRelatedProducts} from "@/services/Product";
import Breadcrumb from "@/components/breadcrumb";
import SliderMobile from "@/app/product/[name]/_components/mobile/slider";
import {Metadata} from "next";
import TabsMobile from "@/app/product/[name]/_components/mobile/tab";
import AddToCartMobile from "@/app/product/[name]/_components/mobile/addtocartmobile";
import "./_components/index.scss"
import SpecialSlider from "@/components/libarary/products/special";
import Banner from "@/components/banner";

export const dynamic = "force-dynamic";
export const revalidate = 0

export async function generateMetadata({params}: any): Promise<Metadata> {
    const product: any = await GetProductsDetails({productSeName: decodeURIComponent(params.name), updateCartItemId: 0})

    const data = {
        description: product?.MetaDescription??product.ShortDescription,
        keywords: product?.MetaKeywords,
    }

    if (product?.MetaTitle !== "NULL")
        return {...data, title: product?.MetaTitle}
    else
        return data
}


const Page = async ({params}: any) => {
    const product: any = await GetProductsDetails({productSeName: decodeURIComponent(params.name), updateCartItemId: 0})
    const relatedProducts: any = await GetRelatedProducts({productId: product.Id, productThumbPictureSize: 200})

    return (
        <div className="product-details">
            <div className={"container"}>
                <div className="hidden lg:block mt-[20px]">

                    {
                        product.Breadcrumb.CategoryBreadcrumb.length > 0 ?
                            <Breadcrumb data={[
                                ...product.Breadcrumb.CategoryBreadcrumb.map(d => ({
                                    ...d,
                                    SeName: "/category/" + d.SeName
                                })), {
                                    Name: product.Breadcrumb.ProductName,
                                    SeName: ''
                                }]} show={product.Breadcrumb.Enabled}/> : ""
                    }
                </div>
                <SliderMobile product={product}/>
                {product.Breadcrumb.CategoryBreadcrumb.length > 0 ?
                    <div className="block lg:hidden mt-[20px] overflow-x-auto breadcrumb-mobile">
                        <Breadcrumb data={[...product.Breadcrumb.CategoryBreadcrumb.map(d => ({
                            ...d,
                            SeName: "/category/" + d.SeName
                        })), {
                            Name: product.Breadcrumb.ProductName,
                            SeName: ''
                        }]} show={product.Breadcrumb.Enabled}/>
                    </div> : ""
                }
                <ProductDetails product={product}/>
            </div>

            <Banner PositionSystemNames={"product_details_before_related_products"}  EntityName={"Product"} EntityId={String(product.Id)}/>

            <div className={"container"}>
                {relatedProducts?.length > 0 ?
                    <ProductSliders data={relatedProducts} title={"محصولات مشابه"}/> : ""}
            </div>
            <div className={"container"}>
                <TabsMobile product={product}/>
                <AddToCartMobile product={product}/>
                <Tabs product={product}/>
            </div>
            {product.JsonLd ?
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(product.JsonLd)}}
                /> : ""}

            {
                product.Breadcrumb.JsonLd && product.Breadcrumb.Enabled ?

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{__html: JSON.stringify(product.Breadcrumb.JsonLd)}}
                    /> : ""}
        </div>
    );
};


export default Page;