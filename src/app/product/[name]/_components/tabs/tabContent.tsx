import React from 'react';
import Info from "@/app/product/[name]/_components/tabs/info";
import Specification from "@/app/product/[name]/_components/tabs/specification";
import Comments from "@/app/product/[name]/_components/tabs/comments/comments";
import Faq from "@/app/product/[name]/_components/tabs/faq";
import ProductSummary from "@/app/product/[name]/_components/ProductSummary";
import ShortInfo from "@/app/product/[name]/_components/tabs/shortdescription";


// type Props={
//     id:'tab-title-description'|'tab-title-additional_information'|'tab-title-reviews'|'tab-title-faq'
//     product:any
// }

const TabContent = ({id,product}:any):any => {

    return (
        <div className="tab-content flex">
            <div className={"grow"}>
                {id === "tab-title-description-short" && product.ShortDescription ? <ShortInfo data={product}/> : ""}
                {id === "tab-title-description" && product.FullDescription ? <Info data={product}/> : ""}
                {id === "tab-title-additional_information" ? <Specification product={product}/> : ""}
                {id === "tab-title-reviews" ? <Comments product={product}/> : ""}
                {id === "tab-title-faq" ? <Faq id={product.Id}/> : ""}
            </div>
            {product.AddToCart.DisableBuyButton ? "" : <ProductSummary product={product}/>}
        </div>
    );
};

export default TabContent;