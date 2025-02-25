

import React, {useEffect} from 'react';
import Slider from "@/app/product/[name]/_components/slider";
import Summary from "@/app/product/[name]/_components/summary/summary";

const ProductDetails = ({product}:any) => {

    return (
       <div className={"product-details"}>
           <div className="product-details__content">
               <Slider product={product}/>
               <Summary product={product}/>
           </div>
       </div>
    );
};

export default ProductDetails;