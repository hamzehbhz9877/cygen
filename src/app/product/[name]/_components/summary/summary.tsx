import React from 'react';
import AddToCart from "@/app/product/[name]/_components/summary/cart/addToCart";
import Content from "@/app/product/[name]/_components/summary/content";
import Title from "@/app/product/[name]/_components/summary/title";
import Banner from "@/components/banner";

const Summary = ({product}) => {

    return (
        <div className={"summary relative"}>

            <Title product={product}/>

            <form action="">
                <Content product={product}/>
                <AddToCart product={product}/>
            </form>
            <div id="myresult" className="img-zoom-result"></div>
        </div>
    );
};

export default Summary;