'use client'

import React, {useEffect} from 'react';
import Cart from "@/app/product/[name]/_components/summary/cart/cart";
import Content from "@/app/product/[name]/_components/summary/content";
import Title from "@/app/product/[name]/_components/summary/title";

const Summary = ({product}) => {
    return (
        <div className={"summary relative"}>
            <Title product={product}/>
            <form action="">
                <Content product={product}/>
                <Cart product={product}/>
            </form>
            <div id="myresult" className="img-zoom-result"></div>
        </div>
    );
};

export default Summary;