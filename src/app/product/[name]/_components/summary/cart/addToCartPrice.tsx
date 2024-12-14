import React from 'react';
import {CiDeliveryTruck, CiShop} from "react-icons/ci";
import {LiaShippingFastSolid} from "react-icons/lia";
import {priceDiscount} from "@/helpers/client";
import Quantity from "@/app/product/[name]/_components/summary/cart/quantity";
import {TbPhoneCall} from "react-icons/tb";

const AddToCartPrice = ({product}) => {
    return (
        <div>
            <div className="product-seller-info">
                <div className="seller-info-changeable">


                    <div className="product-seller-row seller_name">

                        <div className="product-seller-row-icon">
                            <CiShop size={25}/>
                        </div>

                        <div id="myButton_stills" className="product-seller-row-detail" aria-expanded="false">
                            <div className="product-seller-name ">
                                <span> فروشنده: </span>
                                {product.ShowVendor ? product.VendorModel.Name : product.CurrentStoreName}
                            </div>
                            {/*<span className="good-seller">منتخب</span>*/}
                        </div>
                    </div>

                    {product.DeliveryDate ?

                        <div className="product-seller-row">

                            <div className="product-seller-row-icon">
                                <CiDeliveryTruck size={25}/>
                            </div>

                            <div className="product-seller-row-detail">
                                <a data-remodal-target="send_modal" className="cursor">
                                    <div className="product-seller-row-detail-title  send-seller">
                                        <i className="chevrons-right"></i>
                                    </div>
                                </a>
                                <ul>
                                    {/*{product.AvailableEndDate ?*/}
                                    {/*    <li className="pluses">{product.AvailableEndDate}</li> :*/}
                                    {/*    <li className="pluses">زمان آماده سازی: {product.DeliveryDate}</li>*/}
                                    {/*}*/}
                                    <li className="pluses">زمان آماده سازی: {product.DeliveryDate}</li>
                                </ul>
                            </div>
                        </div> : <div className="product-seller-row">

                            <div className="product-seller-row-icon">
                                <CiDeliveryTruck size={25}/>
                            </div>

                            <div className="product-seller-row-detail">
                                <a data-remodal-target="send_modal" className="cursor">
                                    <div className="product-seller-row-detail-title  send-seller">
                                        <i className="chevrons-right"></i>
                                    </div>
                                </a>
                                <ul>
                                        <li className="pluses">زمان آماده سازی: آماده ارسال</li>
                                </ul>
                            </div>
                        </div>}
                    {product.IsFreeShipping ?
                        <div className="product-seller-row">

                            <div className="product-seller-row-icon">
                                <LiaShippingFastSolid color={"#e6123d"} size={25}/>
                            </div>

                            <div className="product-seller-row-detail">
                                <a data-remodal-target="send_modal" className="cursor">
                                    <div className="product-seller-row-detail-title  send-seller">
                                        <i className="chevrons-right"></i>
                                    </div>
                                </a>
                                <ul>
                                    <li className="pluses">ارسال رایگان</li>
                                </ul>
                            </div>

                        </div> : ""}

                </div>
            </div>

            {product.AddToCart.DisableBuyButton ? "" :
                <div className="back_holder">
                    {product.ProductPrice.HidePrices ? "" :
                        <>
                        <div className="old-price">
                                <div className="old-price__value">
                                    <del>
                                        <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.Price?.split(" ")[0] : product.ProductPrice.OldPrice?.split(" ")[0]}</bdi>
                                    </del>
                                </div>
                                {priceDiscount(product) ?
                                    <div className="discount">%<p>{priceDiscount(product)}</p></div> : ""}
                            </div>
                            <div className='price'>
                                <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.PriceWithDiscount.split(" ")[0] : product.ProductPrice.Price?.split(" ")[0]}&nbsp;
                                    <span
                                        className="woocommerce-Price-currencySymbol font-light">{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.PriceWithDiscount?.split(" ")[1] : product.ProductPrice.Price?.split(" ")[1]}</span>
                                </bdi>
                            </div>
                        </>
                    }
                    {/*<span className="update-price">{product.StockAvailability}</span>*/}

                    {product.ProductPrice.CallForPrice ?
                        <div className="m-[10px]">
                            <button className={"displayBackInStockSubscription button !flex gap-3"}>
                                <TbPhoneCall size={20}/>
                                تماس برای قیمت
                            </button>
                        </div>
                        : <div className="add-to-cart">
                            <Quantity product={product}/>
                            <button type="submit" className="button">
                                افزودن به سبد خرید
                            </button>
                        </div>}
                </div>}
            {product.AddToCart.MinimumQuantityNotification ?<span className="text-red-500 text-[14px] px-[12px]">{product.AddToCart.MinimumQuantityNotification}</span>:""}
        </div>
    );
};

export default AddToCartPrice;