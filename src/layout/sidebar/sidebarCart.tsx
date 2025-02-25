'use client'

import React from 'react';
import {useQueryClient} from "@tanstack/react-query";

import "./index.scss"
import {IoCloseOutline} from "react-icons/io5";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import {FaTruckFast} from "react-icons/fa6";
import {Discount} from "@/helpers/client";
import Count from "@/app/(cart)/cart/count";
import EmptyCart from "@/components/partial/cart/emptyCart";

const SidebarCart = ({isOpen, setIsOpen}) => {

    const queryClient = useQueryClient();

    const data= queryClient.getQueryData<any>(['FlyoutShoppingCart'])?.data
    return (
        <>
            <div id="cart-sidebar" className={`prk-static-sidebar style-1 ${isOpen ? ' nasa-active' : ''}`}>

                <div className={"flex flex-col justify-between h-full"}>
                    <div>
                        <div className="header-carter">
                    <span>شما این محصولات را انتخاب کرده اید<em className="em-plus cart-counter"><em
                        className="em-plus cart-counter">{data?.TotalProducts ?? 0}</em></em></span>
                            <IoCloseOutline size={25} color="#FFF" className={"cursor-pointer"} onClick={() => setIsOpen(false)}/>
                        </div>
                        {
                           data?.TotalProducts === 0 ? <EmptyCart/> : <div className="pt-[20px] ">
                                    {data?.Items.map((item: any, index: number) => {
                                        return <div key={index} className="flex gap-[15px] sidebar-product-item">
                                            <div className="flex flex-col items-center gap-[10px]">
                                                <div>
                                                    <Image
                                                        width="78" height="78"
                                                        className="w-[78px] h-[78px]"
                                                        src={item.Picture.ImageUrl} title={item.Picture.Title}
                                                        alt={item.Picture.AlternateText}
                                                    />
                                                </div>
                                                <div className="quantity pt-[10px]">
                                                    <Count sidebar productId={item.ProductId} defaultValue={item}/>
                                                </div>
                                            </div>

                                            <div className={"flex flex-col justify-between"}>
                                                <Link className="product-name"
                                                      href={"/product/" + item.ProductSeName}
                                                      title={item.ProductName}>{item.ProductName}</Link>
                                                <dl className="variation text-[11px] leading-[18px] text-[##8d8d8d]">
                                                    {parse(item.AttributeInfo)}
                                                </dl>
                                                <div className="text-[13px]"><span
                                                    className="amount"><bdi>{item.UnitPrice.split(' ')[0]}&nbsp;
                                                    <span
                                                        className="woocommerce-Price-currencySymbol">{item.UnitPrice.split(' ')[1]}</span></bdi></span>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                    }
                                </div>
                        }
                    </div>


                    {data?.TotalProducts === 0 ? '' :
                        <div className="p-3 py-[20px]">
                            {/*<div className="flex justify-between items-center gap-[10px]">*/}
                            {/*    <span>قیمت کالاها</span>*/}
                            {/*    <span>*/}
                            {/*        <span*/}
                            {/*            className="amount"><bdi>{data?.UnitPrice.split(' ')[0]}&nbsp;<span*/}
                            {/*            className="woocommerce-Price-currencySymbol">{data?.UnitPrice.split(' ')[1]}</span></bdi></span>*/}
                            {/*    </span>*/}
                            {/*</div>*/}
                            <div className="flex justify-between items-center">
    <span>
        مجموع    </span>
                                <span>
        <strong><span className="amount"><bdi>{data?.SubTotal.split(' ')[0]}&nbsp;
            <span
                className="woocommerce-Price-currencySymbol">{data?.SubTotal.split(' ')[1]}</span></bdi></span></strong>     </span>
                            </div>
                            {data?.FreeShippingOverXEnabled?
                                <>
                                    <div className={"bg-[#CBCBCB] relative h-[5px] w-full rounded-[12px] mt-[30px]"}>
                                        <div
                                            className={`absolute bg-[#00a32a] h-[5px] w-[${data?.SubTotalValue >=data?.FreeShippingOverXValue?100:(data?.SubTotalValue/data?.FreeShippingOverXValue)*100}%] left-0 top-0 right-0 rounded-[12px]`}/>
                                        <div

                                            style={{right:`calc(${data?.SubTotalValue >=data?.FreeShippingOverXValue?100:(data?.SubTotalValue/data?.FreeShippingOverXValue)*100}% - 30px)`}}
                                            className={`w-[30px] h-[30px] overflow-hidden flex absolute top-1/2 bg-white -translate-y-1/2
                                              items-center justify-center rounded-full border border-[#00a32a]`}>
                                            <span className={"text-[12px]"}>{data?.SubTotalValue >=data?.FreeShippingOverXValue?100:(data?.SubTotalValue/data?.FreeShippingOverXValue)*100}%</span>
                                        </div>
                                    </div>
                                    {data?.SubTotalValue >=data?.FreeShippingOverXValue?
                                    <div className=" flex items-center pt-[15px] text-[12px] gap-[5px]"><FaTruckFast
                                        color={"#4CAF50"}
                                        size={19}/>
                                        تبریک، ارسال به صورت <strong
                                            className={"text-dynamic-color-from"}>رایگان</strong>
                                    </div>:""}
                                </>:""}
                                <div className={"mt-[10px]"}>
                                    <Link href="/cart" onClick={() => setIsOpen(false)}
                                          className="text-center block bg-dynamic-color-from rounded-[8px] py-[12px] w-full text-white text-[13px]">مشاهده
                                        سبد
                                        خرید</Link>
                                </div>

                                </div>

                            }
                        </div>
                        </div>
                        <div className={"backdrop"} onClick={() => setIsOpen(false)}></div>
            </>
            );
            };

export default SidebarCart;