'use client'

import React from 'react';
import Image from "next/image";
import ProductImage from "@/assets/images/Rectangle 29236.svg";
import {RiPaletteLine} from "react-icons/ri";
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import ProductList from "@/app/_components/productList";
import {useQuery} from "@tanstack/react-query";
import {ShoppingCartService} from "@/services/ShoppingCart";

const ConsignmentSummary = () => {


    const {data:cart} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })
    const {data} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })
    console.log(cart?.data)

    return (
        <div className={"consigment consignmentSummary"}>

            <div className={"hidden lg:block"}>
                <div className="consignmentSummary__top">
                    <div>
                        <span className={"title"}>مرسوله</span>
                        <span className={"value"}>{data?.data.Items.length}</span>
                    </div>
                    <div>
                        <span className={"title"}>زمان ارسال</span>
                        <span className={"value"}>دیتا</span>
                    </div>
                    <div>
                        <span className={"title"}>نحوه ارسال</span>
                        <span className={"value"}>دیتا</span>
                    </div>
                    <div>
                        <span className={"title"}>نحوه تقریبی ارسال</span>
                        <span className={"value"}>دیتا</span>
                    </div>
                    <div>
                        <span className={"title"}>هزینه ارسال</span>
                        <span className={"value"}>{data?.data.OrderTotal.Shipping}</span>
                    </div>
                </div>
                <hr className={"border-[#E5E5E5] my-[16px]"}/>
                <ProductList data={data?.data.Items}/>
            </div>

            <div className={'bg-white rounded-[16px] flex-1 block lg:hidden'}>
                <Collapse
                    title={
                        <div className="flex justify-between items-center py-[5px] cursor-pointer">
                            <div className={"flex flex-col gap-[8px]"}>
                                <div className={"flex items-center text-[#979797] gap-[8px]"}>
                                    <span className={"text-[14px] "}>مرسوله</span>{"-"}
                                    <span className={"text-[12px]"}>2 کالا</span>
                                </div>
                                <div className={"flex items-center gap-[20px] flex-wrap"}>
                                    <div className={"text-[#2F2F2F] flex flex-col gap-[4px]"}>
                                        <span className={"text-[12px]"}>ارسال عادی</span>
                                        <span className={"text-[14px]"}>پنج شنبه 11 دی - بازه 20 -24</span>
                                    </div>
                                    <div className={"text-[#2F2F2F] flex flex-col gap-[4px]"}>
                                        <span className={" text-[12px]"}>مبلغ مرسوله</span>
                                        <span className={"text-[14px]"}>{data?.data.OrderTotal.SubTotal}</span>
                                    </div>
                                </div>
                            </div>
                            <LiaAngleDownSolid className={"angled"} size={24} color={"#5e5e5e"}/>
                        </div>
                    }
                    content={
                        <div className={"mt-[10px]"}>
                            <ProductList data={data?.data.Items}/>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default ConsignmentSummary;