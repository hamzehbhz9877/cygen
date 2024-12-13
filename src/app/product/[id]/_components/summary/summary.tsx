import React from 'react';
import AddToCart from "@/app/product/[id]/_components/summary/addToCart";
import Content from "@/app/product/[id]/_components/summary/content";
import Title from "@/app/product/[id]/_components/summary/title";

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