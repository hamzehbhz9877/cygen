import React from 'react';
import Info from "@/app/product/[name]/_components/mobile/tab/info";

import "./index.scss"
import Specification from "@/app/product/[name]/_components/mobile/tab/specification";
import Faq from "@/app/product/[name]/_components/mobile/tab/faq";
import Comments from "@/app/product/[name]/_components/mobile/tab/comments";
import ShortInfo from "@/app/product/[name]/_components/mobile/tab/shortDescription";

const TabsMobile = ({product}:any) => {
    return (
        <div className="tabs tab-content tabs-mobile block lg:hidden">
            {product.ShortDescription? <ShortInfo data={product}/>:""}
            {product.FullDescription ? <Info data={product}/>:""}
            <Specification data={product}/>
            <Comments product={product}/>
            <Faq id={product.Id}/>
        </div>
    );
};

export default TabsMobile;