'use client'

import React from 'react';

import Image from "next/image";

import "./index.scss"
import {RiBankCardLine, RiShoppingBag2Line, RiTruckLine} from "react-icons/ri";
import {FaAngleRight} from "react-icons/fa6";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import Logo from "@/layout/header/top/logo";
import {useQuery} from "@tanstack/react-query";
import {ShoppingCartService} from "@/services/ShoppingCart";

const CartHeader = () => {

    const path = usePathname()


    const router = useRouter()

    return (
        <div className="cart-header">
            <div className={"flex w-full relative justify-center py-[20px]  md:py-[40px] border-b border-[#e6e6e6]"}>
                <div className={"block lg:hidden absolute right-[20px] top-1/2 -translate-y-1/2"}>
                <span
                    className={"rounded-[8px] w-[32px] h-[32px]  flex items-center justify-center  border border-[#E6E6E6] cursor-pointer"}
                    onClick={() => router.back()}
                >
                    <FaAngleRight className="text-[#E6E6E6] p-[4px]" size={24}/>
                </span>
                </div>
                <Logo/>
            </div>
            <div className={"container"}>
                <div className={"relative flex items-center h-max mb-[15px] md:mb-0 md:h-[144px]"}>
                    <div
                        className="absolute hidden lg:flex right-0 top-1/2 cursor-pointer -translate-y-1/2 gap-[2px] items-center text-dynamic-color-from text-[14px]"
                        onClick={() => router.back()}
                    >
                        <FaAngleRight className="text-dynamic-color-from" size={12}/>
                        بازگشت
                    </div>
                    <div className="process max-w-[600px] w-full relative mx-auto">
                        <div
                            className={`border-dashed right-0 lef-0 absolute  border-[1px] w-full`}/>
                        <div className={"flex justify-center items-center flex-col gap-[6px]"}>
                            <div
                                className={`proc shopping-cart ${path !== "/cart" ? '!text-[#ED303D] !shadow-none !bg-white' : ''} ${path === "/cart" ? 'active' : ''}`}>
                                <RiShoppingBag2Line color={path !== "/cart" ? '#ED303D' : "#979797"} size={20}/>
                                <Link href="/cart" className={"hidden lg:block"}>
                                    سبد خرید
                                </Link>
                            </div>
                            <Link href="/cart"
                                  className={`block lg:hidden text-[12px] mt-[15px] ${path !== "/cart" ? 'text-[#ED303D]' : ''}`}>
                                سبد خرید
                            </Link>
                        </div>
                        <div className={"flex justify-center items-center flex-col gap-[6px]"}>
                            <div
                                className={`shipping proc ${path === "/shipping" ? 'active' : ''} ${path === "/payment" ? '!text-[#ED303D] !shadow-none !bg-white z-[10]' : ''}`}>
                                <RiTruckLine color={path === "/payment" ? '#ED303D' : "#979797"} size={20}/>
                                <Link href="/shipping" className={"hidden lg:block"}>
                                    ارسال
                                </Link>
                            </div>
                            <Link href="/shipping"
                                  className={`block lg:hidden text-[12px] mt-[15px] ${path === "/payment" ? 'text-[#ED303D]' : ''}`}>
                                ارسال
                            </Link>
                        </div>
                        <hr className={`${path === "/shipping" ? 'w-[50%]' : path === "/payment" ? 'w-full' : ''} border-[2px] absolute  border-[#ED303D]`}/>
                        <div className={"flex justify-center items-center flex-col gap-[6px]"}>
                            <div className={`payment proc ${path === "/payment" ? 'active' : ''}`}>
                                <RiBankCardLine color={"#979797"} size={20}/>
                                <Link href="/payment" className={"hidden lg:block"}>
                                    پرداخت
                                </Link>
                            </div>
                            <Link href="/payment" className={"block lg:hidden text-[12px] mt-[15px]"}>
                                پرداخت
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;