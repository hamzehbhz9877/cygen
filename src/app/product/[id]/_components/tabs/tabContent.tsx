import React from 'react';
import Info from "@/app/product/[id]/_components/tabs/info";
import Specification from "@/app/product/[id]/_components/tabs/specification";
import Comments from "@/app/product/[id]/_components/tabs/comments/comments";
import Faq from "@/app/product/[id]/_components/tabs/faq";


type Props={
    id:'tab-title-description'|'tab-title-additional_information'|'tab-title-reviews'|'tab-title-faq'
    product:any
    comments:any
}

const TabContent = ({id,product,comments}:Props) => {
    return (
        <div className="tab-content">
            {id==="tab-title-description"?<Info/>:""}
            {id==="tab-title-additional_information"?<Specification product={product}/>:""}
            {id==="tab-title-reviews"?<Comments comments={comments}/>:""}
            {id==="tab-title-faq"?<Faq id={product.Id}/>:""}
        </div>
    );
};

export default TabContent;