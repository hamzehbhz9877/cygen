import React from 'react';
import Quantity from "@/app/product/[name]/_components/summary/cart/quantity";
import {priceDiscount} from "@/helpers/client";
import {LuBellRing} from "react-icons/lu";
import {TbPhoneCall} from "react-icons/tb";

const Addtocart = ({product}) => {
    return (
        <div
            className="back_holder addtocart !flex justify-between !flex-row fixed bottom-0 right-0 left-0 z-[100] bg-white">
            {product.AddToCart.DisableBuyButton && product.DisplayBackInStockSubscription ?
                    <>
                        <button className="displayBackInStockSubscription button !flex gap-3"><LuBellRing size={25}/>
                            <span>موجود شد خبرم کن</span>
                        </button>
                    </>

                    : <>
                <div className={`add-to-cart ${product.ProductPrice.CallForPrice?'flex-1':''}`}>
                    {product.ProductPrice.CallForPrice ?
                        <button className={"displayBackInStockSubscription !w-full button !flex gap-3"}>
                            <TbPhoneCall size={20}/>
                            تماس برای قیمت
                        </button> : <div className="add-to-cart">
                            <Quantity product={product}/>
                            {/*<button type="submit" className="button">*/}
                            {/*    افزودن به سبد خرید*/}
                            {/*</button>*/}
                        </div>}
                    {/*<button type="submit" className="button">*/}

                    {/*    افزودن به سبد خرید*/}
                    {/*</button>*/}
                </div>
                    <div className={"flex flex-col justify-center"}>
                    {product.ProductPrice.HidePrices ? "" :
                        <>
                            <div className="old-price">
                                <div className="old-price__value">
                                    <del>
                                        <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.Price : product.ProductPrice.OldPrice}</bdi>
                                    </del>
                                </div>
                                {priceDiscount(product) ?
                                    <div className="discount">%<p>{priceDiscount(product)}</p></div> : ""}
                            </div>

                            <div className='price'>
                                <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.PriceWithDiscount : product.ProductPrice.Price}</bdi>
                            </div>
                        </>
                    }
                </div>
            </>}

        </div>
    );
};

export default Addtocart;