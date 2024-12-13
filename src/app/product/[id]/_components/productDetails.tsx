

import React, {useEffect} from 'react';


import "./index.scss"
import Slider from "@/app/product/[id]/_components/slider";
import Summary from "@/app/product/[id]/_components/summary/summary";

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