'use client'

import React, {useEffect, useState} from 'react';
import PriceBox from "@/app/_components/priceBox";
import Payments from "@/app/(cart)/payment/payments";
import ConsignmentSummary from "@/app/(cart)/payment/consignmentSummary";
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import {CiDiscount1} from "react-icons/ci";
import {MdCardGiftcard} from "react-icons/md";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    ApplyDiscountCoupon, ApplyGiftCard,
    FlyoutShoppingCart,
    ShoppingCartService,
} from "@/services/ShoppingCart";
import {showToast} from "@/components/react-toastify/react-toastify";

const Payment = () => {

    const [coupon, setCoupon] = useState("")
    const [giftCard, setGiftCard] = useState("")

    const [isApplied, setIsApplied] = useState(null)
    const [isAppliedGift, setIsAppliedGift] = useState(null)

    const queryClient = useQueryClient();
    const {data} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })

    const {mutate: applyCoupon} = useMutation<any, any, any, any>({
        mutationFn: ApplyDiscountCoupon, onSuccess: (data) => {
            if (data?.data.DiscountBox.IsApplied)
                showToast("success", data?.data.DiscountBox.Messages[0])
            else showToast("error", data?.data.DiscountBox.Messages[0])
            setIsApplied(data?.data.DiscountBox.IsApplied)

            setTimeout(() =>  setIsApplied(null),2000)
            queryClient.invalidateQueries({queryKey: ["ShoppingCart"]})
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })

    const {mutate: applyGiftCard} = useMutation<any, any, any, any>({
        mutationFn: ApplyGiftCard, onSuccess: (data) => {
            if (data?.data.GiftCardBox.IsApplied)
                showToast("success", data?.data.GiftCardBox.Message)
            else showToast("error", data?.data.GiftCardBox.Message)
            setIsAppliedGift(data?.data.GiftCardBox.IsApplied)
            setTimeout(() =>  setIsAppliedGift(null),2000)
            queryClient.invalidateQueries({queryKey: ["ShoppingCart"]})
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })


    return (

        <div className={"payment-page"}>
            <div className={"container"}>
                <div className={"flex gap-[24px] flex-col lg:flex-row justify-center"}>
                    <div className={"flex-1"}>
                        <div>
                            <h3 className={"text-[#2F2F2F] text-[14px] font-bold mb-[8px]"}>شیوه پرداخت</h3>
                            <Payments/>
                        </div>
                        <div className={"mt-[30px]"}>
                            <h3 className={"text-[#2F2F2F] text-[14px] font-bold mb-[8px]"}>خلاصه سفارش</h3>
                            <ConsignmentSummary/>
                        </div>
                        <div className={"mt-[24px]"}>
                            <h3 className={"text-[#2F2F2F] text-[14px] font-bold mb-[8px]"}>اعمال کوپن یا کارت
                                هدیه</h3>
                            <div className={"flex flex-col lg:flex-row items-baseline gap-[16px]"}>
                                <div className={'bg-white rounded-[16px] px-[24px] py-[16px] flex-1 w-full'}>
                                    <Collapse
                                        title={
                                            <div className="flex justify-between items-center py-[5px] cursor-pointer">
                                                <div className={"flex items-center gap-[8px]"}>
                                                    <CiDiscount1 size={24} color={"#5e5e5e"}/>
                                                    <span className={"text-[#5E5E5E]"}>کد تخفیف</span>
                                                </div>
                                                <LiaAngleDownSolid className={"angled"} size={24} color={"#5e5e5e"}/>
                                            </div>
                                        }
                                        content={
                                            <div className={"mt-[10px]"}>
                                                <h3 className={"mb-[7px] font-bold text-[16px]"}>آیا کد تخفیف دارید
                                                    ؟</h3>

                                                <p className={"text-[14px] text-[#979797]"}>کوپن‌ها در حقیقت کدهای
                                                    تخفیفی
                                                    هستند که با استفاده از آن‌ها می‌توانید، خریدهای به صرفه‌تری داشته
                                                    باشید.
                                                    بیشتر بدانید</p>


                                                <div className={"relative mt-[13px]"}>
                                                    {isApplied === true ?
                                                        <div
                                                            className={"bg-[#00BA8812] p-[16px] flex justify-between items-center rounded-[16px] mb-[13px]"}>
                                                    <span
                                                        className={"text-[#00BA88] font-medium text-[16px]"}>{coupon}</span>
                                                            <span className={"text-[#00BA88] font-medium text-[16px]"}>با موفقیت ثبت شد</span>
                                                        </div> : isApplied === false ?
                                                            <div
                                                                className={"bg-[#ED2E7E12] p-[16px] flex justify-between items-center rounded-[16px] mb-[13px]"}>
                                                    <span
                                                        className={"text-[#ED2E7E] font-medium text-[16px]"}>{coupon}</span>
                                                                <span
                                                                    className={"text-[#ED2E7E] font-medium text-[16px]"}>فاقد اعتبار</span>
                                                            </div>
                                                            :
                                                            <>
                                                                <input type="text" value={coupon}
                                                                       onChange={e => setCoupon(e.target.value)}
                                                                       className={"w-full rounded-[16px] border border-[#D6D6D6] placeholder:text-[#979797] text-[16px] p-[16px] pl-[94px] py-[14px]"}
                                                                       placeholder={"کد تخفیف را اینجا وارد کنید"}/>
                                                                <button onClick={() => {
                                                                    const formData = new FormData();
                                                                    formData.append("discountCouponCode", coupon);
                                                                    applyCoupon({code: coupon, data: formData})
                                                                }}
                                                                        className={"absolute left-0 text-white py-[16px] bg-[#ED303D] rounded-[16px] w-[93px]"}>اعمال
                                                                </button>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                                {data?.data.GiftCardBox.Display ? <div
                                    className={"bg-white flex-1 w-full rounded-[16px] px-[24px] py-[16px] cursor-pointer"}>
                                    <Collapse
                                        title={
                                            <div className={"flex justify-between items-center py-[5px]"}>
                                                <div className={"flex items-center gap-[8px]"}>
                                                    <MdCardGiftcard size={24} color={"#5e5e5e"}/>
                                                    <span className={"text-[#5E5E5E]"}>کارت هدیه</span>
                                                </div>
                                                <LiaAngleDownSolid className={"angled"} size={24} color={"#5e5e5e"}/>
                                            </div>
                                        }
                                        content={
                                            <div className={"mt-[10px]"}>
                                                <h3 className={"mb-[7px] font-bold text-[16px]"}>درج کارت هدیه</h3>
                                                <p className={"text-[14px] text-[#979797]"}>کوپن‌ها در حقیقت کدهای
                                                    تخفیفی
                                                    هستند که با استفاده از آن‌ها می‌توانید، خریدهای به صرفه‌تری داشته
                                                    باشید.
                                                    بیشتر بدانید</p>
                                                {isAppliedGift === true ?
                                                    <div
                                                        className={"bg-[#00BA8812] p-[16px] flex justify-between items-center rounded-[16px] mb-[13px]"}>
                                                    <span
                                                        className={"text-[#00BA88] font-medium text-[16px]"}>{giftCard}</span>
                                                        <span className={"text-[#00BA88] font-medium text-[16px]"}>با موفقیت ثبت شد</span>
                                                    </div> : isAppliedGift === false ?
                                                        <div
                                                            className={"bg-[#ED2E7E12] p-[16px] flex justify-between items-center rounded-[16px] mb-[13px]"}>
                                                    <span
                                                        className={"text-[#ED2E7E] font-medium text-[16px]"}>{giftCard}</span>
                                                            <span
                                                                className={"text-[#ED2E7E] font-medium text-[16px]"}>فاقد اعتبار</span>
                                                        </div>
                                                        :
                                                        <>
                                                            <div className={"relative mt-[13px]"}>
                                                                <input type="text" value={giftCard}
                                                                       onChange={e => setGiftCard(e.target.value)}
                                                                       className={"w-full rounded-[16px] border border-[#D6D6D6] placeholder:text-[#979797] text-[16px] p-[16px] pl-[94px] py-[14px]"}
                                                                       placeholder={"کارت هدیه را اینجا وارد کنید"}/>
                                                                <button onClick={() => {
                                                                    const formData = new FormData();
                                                                    formData.append("giftCardCouponCode", giftCard);
                                                                    applyGiftCard({code: giftCard, data: formData})
                                                                }}
                                                                        className={"absolute left-0 text-white bg-[#ED303D] rounded-[16px] py-[16px] w-[93px]"}>اعمال
                                                                </button>
                                                            </div>
                                                        </>}

                                            </div>
                                        }
                                    />
                                </div> : ""}
                            </div>
                        </div>
                    </div>
                    <PriceBox buttonText={'پرداخت و ثبت نهایی سفارش'}/>
                </div>
            </div>
        </div>
    );
};

export default Payment;