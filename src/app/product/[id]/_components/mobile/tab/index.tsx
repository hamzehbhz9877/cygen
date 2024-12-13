import React from 'react';
import Info from "@/app/product/[id]/_components/mobile/tab/info";

import "./index.scss"
import Specification from "@/app/product/[id]/_components/mobile/tab/specification";
import Faq from "@/app/product/[id]/_components/mobile/tab/faq";
import Comments from "@/app/product/[id]/_components/mobile/tab/comments";

const TabsMobile = ({product,comments}:any) => {
    return (
        <div className="tabs tab-content tabs-mobile block md:hidden">
            <Info data={product}/>
            <Specification data={product}/>
            <Comments id={1}/>
            <Faq id={product.Id}/>
        </div>
    );
};

export default TabsMobile;