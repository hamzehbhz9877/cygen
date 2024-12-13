import React from 'react';
import Image from "next/image";
import {CiDeliveryTruck, CiShop} from "react-icons/ci";
import {productStore} from "@/state/product/product";
import Quantity from "@/app/product/[id]/_components/summary/quantity";

const ProductSummary = ({product}:any) => {


    return (
        <div className="product-summary hidden md:block ">
            <div className="mr-10 relative">
                <div className="sticky">
                    <div
                        className="bg-neutral-100 product-summary-box mb-2 mt-5 p-4 rounded text-[12px]">
                        <div className="flex items-center text-h5 py-2">
                            <div>

                            </div>
                        </div>
                        <div className="flex image pb-3 mb-3">
                            <div className="rounded shrink-0">
                                <Image width={80} height={80}
                                       src={"https://api.cygenco.com/images/thumbs/0005635_-iphone-16-pro-zaa-512-8-.webp"}
                                       alt={"image"}/>
                            </div>
                            <div className="flex flex-col mr-5 leading-[25px]"><p
                                className="ellipsis-2 leading-[20px]">{product.Name}</p>
                                <div className="flex items-center mt-auto">
                                    <div className="w-[14px] h-[14px] rounded-[50%] bg-black"></div>
                                    <p className="mr-2">طلایی</p></div>
                            </div>
                        </div>
                        <div className="product-seller-info">
                            <div className="seller-info-changeable">


                                <div className="product-seller-row seller_name">

                                    <div className="product-seller-row-icon">
                                        <CiShop size={25}/>
                                    </div>

                                    <div id="myButton_stills" className="product-seller-row-detail"
                                         aria-expanded="false">

                                        <div className="product-seller-name ">
                                            <span> فروشنده: </span>
                                            {product.ShowVendor ? product.VendoreModel.Name : product.CurrentStoreName}
                                        </div>

                                        {/*<span className="good-seller">منتخب</span>*/}

                                    </div>
                                </div>


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
                                            <li className="pluses">زمان آماده سازی:</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="back_holder">

                            <div className="old-price">
                                <div className="old-price__value">
                                    <del>
                                        <bdi>57,450,000&nbsp;</bdi>
                                    </del>
                                </div>
                                <div className="discount">%<p>4</p></div>
                            </div>

                            <div className='price'>
                                <bdi>57,450,000&nbsp;<span>تومان</span></bdi>
                            </div>
                            {/*<span className="update-price">بروزرسانی قیمت:		<span*/}
                            {/*    className="product-update-date">8 آذر 1403</span></span>*/}
                            <div className="add-to-cart">
                                <Quantity/>
                                <button type="submit" className="button">

                                    افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;