'use client'
import React from 'react';
import {LuBellRing} from "react-icons/lu";
import AddToCartPrice from "@/app/product/[name]/_components/summary/cart/addToCartPrice";

const AddToCart = ({product}) => {


    return (
        <div className="summary__cart">
            {product.AddToCart.DisableBuyButton && !product.DisplayBackInStockSubscription ? <div className="p-[10px]">
                <div className="rounded-md nonexistent px-8  bg-white">
                    <div className="flex w-full items-center gap-1 py-3">
                        <div className=" h-[1px] flex-grow bg-gray-500"></div>
                        <p className="relative px-1 text-sm text-gray-600 px-4 font-medium">ناموجود</p>
                        <div className=" h-[1px] flex-grow bg-gray-500"></div>
                    </div>
                </div>
            </div> : ""}
            <AddToCartPrice product={product}/>
            {product.AddToCart.DisableBuyButton && product.DisplayBackInStockSubscription ?
                <div className={"p-[10px]"}>
                    <p className={"my-[15px] text-justify text-[14px]"}>این کالا فعلا موجود نیست اما می‌توانید زنگوله
                        را بزنید تا به محض موجود شدن، به شما خبر دهیم.
                    </p>
                    <button className="displayBackInStockSubscription button !flex gap-3"><LuBellRing size={20}/>
                        <span>موجود شد خبرم کن</span>
                    </button>
                </div> : ""
            }
        </div>
    );
};

export default AddToCart;