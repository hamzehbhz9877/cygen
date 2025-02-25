'use client'

import React, {useEffect, useState} from 'react';

import "./index.scss"
import {TbTruck} from "react-icons/tb";
import {GoGift} from "react-icons/go";
import {RiDeleteBinLine} from "react-icons/ri";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    ApplyDiscountCoupon,
    ApplyGiftCard,
    RemoveDiscountCoupon,
    RemoveGiftCard,
    ShoppingCartService
} from "@/services/ShoppingCart";
import {useRouter} from "next/navigation";
import useAuth from "@/context/authentication/useAuth";
import Login from "@/components/login";
import useModal from "@/context/modal/useModal";
import {productStore} from "@/state/product/product";
import {formatter} from "@/helpers/client";
import {showToast} from "@/components/react-toastify/react-toastify";

const PriceBox = ({shipping = false, gift = false, nextStepUrl = null, buttonText = 'مرحله بعد'}) => {

    const {data,refetch} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })


    const {mutate: removeCoupon} = useMutation<any, any, any, any>({
        mutationFn: RemoveDiscountCoupon, onSuccess: (data) => {
            showToast("success", data?.data.DiscountBox.Messages[0])
            refetch()
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })

    const {mutate: removeGiftCard} = useMutation<any, any, any, any>({
        mutationFn: RemoveGiftCard, onSuccess: () => {
            refetch()
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })


    const subTotal = data?.data.OrderTotal.SubTotal.split(" ")[0].replaceAll("٬", '')

    const {shoppingCart} = productStore(d => d)

    const {openModal} = useModal()
    const router = useRouter()

    const {user} = useAuth()

    const HasWarnings = () => (shoppingCart === null || shoppingCart?.Items.reduce((acc, curr) => acc + curr.Warnings.length, 0) === 0) &&
        data?.data.Warnings.length === 0

    const handleNextStep = () => {
        if (HasWarnings()) {
            if (user) {
                router.push(nextStepUrl)
            } else {
                openModal(<Login/>, {className: "login"})
                router.push(`/cart?redirectUrl=${nextStepUrl}`)
            }
        }
    }

    return (
        <div className={"priceBox"}>
            <div className={"flex flex-col gap-[16px]"}>
                <div className="item product-cart">
                    <span>قیمت {data?.data.Items.length} کالا</span>
                    <span>{data?.data.OrderTotal.SubTotal}</span>
                </div>
                <div className={"item discount"}>
                    <span>تخفیف</span>
                    <span>{data?.data.OrderTotal?
                        formatter.format((+data?.data.OrderTotal.OrderTotal?.split(" ")[0].replaceAll("٬", ''))-(+data?.data.OrderTotal.SubTotal?.split(" ")[0].replaceAll("٬", ''))) :""}</span>
                </div>
            </div>
            <hr/>

            <div className={"flex flex-col gap-[16px]"}>
                <div className={"item total"}>
                    <span>جمع خرید</span>
                    <span>{data?.data.OrderTotal.OrderTotal}</span>
                </div>
                {data?.data.OrderTotal.DisplayTax ? data?.data.OrderTotal.Tax ?
                    <div className={"item text-[#5E5E5E]"}>
                        <span>مالیات</span>
                        <span>{data?.data.OrderTotal.Tax}</span>
                    </div> : "" : ""}
                {data?.data.OrderTotal.Shipping ?
                    <div className={"item text-[#5E5E5E]"}>
                        <span>هزینه ارسال</span>
                        <span>{data?.data.OrderTotal.Shipping}</span>
                    </div> : <div className={"rounded-[8px] bg-[#168FDF08] p-[8px]"}>
                        <p className={"text-[12px] text-[#168FDF]"}>هزینه‌ی ارسال بر اساس آدرس، زمان و نحوه‌ی ارسال
                            انتخابی شما‌ محاسبه و به این مبلغ اضافه خواهد
                            شد</p>
                    </div>}
                {data?.data.FreeShippingOverXEnabled ?
                    <>
                        <div className={"bg-[#CBCBCB] relative h-[3px] w-full rounded-[12px]"}>
                            <div
                                className={`absolute bg-[#ED303D] h-[3px] w-[${subTotal >= data?.data.FreeShippingOverXValue ? 100 :
                                    (subTotal / data?.data.FreeShippingOverXValue) * 100}] left-0 top-0 right-0 rounded-[12px]`}/>
                            <div
                                style={{
                                    right: `calc(${subTotal >= data?.data.FreeShippingOverXValue ? 100 : (subTotal / data?.data.FreeShippingOverXValue) * 100}% - 21px)`
                                }}

                                className={"w-[25px] h-[25px] flex absolute top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ED303D]"}>
                                <TbTruck color={"white"} size={18}/>
                            </div>
                        </div>
                        {
                            subTotal >= data?.data.FreeShippingOverXValue ?
                                <div className={"flex items-center gap-[5px]"}>
                                    <GoGift size={15} color={"#ED303D"}/>
                                    <p className={"text-[12px] text-[#5E5E5E]"}>
                                        تبریک، ارسال به صورت <span className={"font-bold"}>رایگان</span>
                                    </p>
                                </div> : ""}
                    </> : ""}
            </div>
            <hr/>
            {data?.data.DiscountBox?.Display && data?.data.DiscountBox.AppliedDiscountsWithCodes.length > 0 ?
                data?.data.DiscountBox.AppliedDiscountsWithCodes.map((d,index)=> (
                    <div key={index} className={'item mb-[24px]'}>
                        <div className={"flex items-center gap-[8px]"}>
                            <span className={"text-dynamic-color-from"}>کد تخفیف</span>
                            <button onClick={()=>{
                                const formData = new FormData();
                                formData.append(`removeDiscount-${d.Id}`, d.Id);
                                removeCoupon({data: formData})
                            }}
                                className={"rounded-[8px] p-[6px] flex items-center gap-[5px] bg-white text-[#979797] border border-[#979797] text-[12px] font-bold"}>
                                <RiDeleteBinLine size={16}/>
                                حذف
                            </button>
                        </div>
                        <span className={"text-dynamic-color-from"}>{d.CouponCode}</span>
                    </div>
                ))
                : "" }
            {data?.data.GiftCardBox?.Display && data?.data.OrderTotal.GiftCards.length > 0 ?
                data?.data.OrderTotal.GiftCards.map((d,index)=> (
                    <div key={index} className={'item mb-[24px]'}>
                        <div className={"flex items-center gap-[8px]"}>
                            <span className={"text-dynamic-color-from"}>کارت هدیه</span>
                            <button
                                onClick={() => {
                                    const formData = new FormData();
                                    formData.append(`removeGiftCard-${d.Id}`, d.Id);
                                    removeGiftCard({data: formData})
                                }}
                                className={"rounded-[8px] p-[6px] flex items-center gap-[5px] bg-white text-[#979797] border border-[#979797] text-[12px] font-bold"}>
                                <RiDeleteBinLine size={16}/>
                                حذف
                            </button>
                        </div>
                        <span className={"text-dynamic-color-from"}>{d.Amount}</span>
                    </div>
                ))
                : ""}
            <div className={'item payable'}>
                <span>مبلغ قابل پرداخت</span>
                <span>{data?.data.OrderTotal.OrderTotal?.split(" ")[0]}</span>
            </div>

            <button
                className={`${HasWarnings() ? '' : 'inactive'} proc hidden lg:block`}
                onClick={handleNextStep}>
                {buttonText}
            </button>
            <div className="priceFlout">
                <div>
                    <span className={"text-[#5E5E5E] text-[14px]"}>قیمت نهایی:</span>
                    <div className={"flex items-center gap-[3px] mt-[3px]"}>
                        <span
                            className={"text-[#2f2f2f] text-[20px] font-bold"}>{data?.data.OrderTotal.OrderTotal?.split(" ")[0]}</span>
                        <span
                            className={"text-[#2f2f2f] text-[16px]"}>{data?.data.OrderTotal.OrderTotal?.split(" ")[1]}</span>
                    </div>
                </div>
                <button
                    className={`${HasWarnings() ? '' : 'inactive'} proc !mt-0`}
                    onClick={handleNextStep}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PriceBox;