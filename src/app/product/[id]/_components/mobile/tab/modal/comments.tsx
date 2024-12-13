import React from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";
import {FaAngleLeft} from "react-icons/fa6";
import {TbUserPentagon} from "react-icons/tb";
import Rate from "@/app/product/[id]/_components/tabs/comments/rate/rate";
import {BiDislike, BiLike} from "react-icons/bi";
import RateReview from "@/app/product/[id]/_components/tabs/comments/rate/review";

const CommentsModal = ({closeModal}: any) => {
    return (
        <div className="comments">
            <ModalHeader>
                <div
                    className="relative flex h-[52px] md:h-[72px] w-full items-center justify-between px-4 transition-all">
                    <p
                        className="text-lg font-medium leading-8">نظرات کاربران</p>
                    <div
                        className="text-lg font-medium cursor-pointer gap-1.5 font-semiBold leading-6 flex items-center"
                        onClick={closeModal}>
                        <span className={"text-[17px]"}>بازگشت</span>
                        <FaAngleLeft size={22}/>
                    </div>
                    <span className="absolute inset-x-4 bottom-0 border-b border-primary-tint-5"></span></div>
            </ModalHeader>
            <ModalBody>
                <RateReview/>

                <div className="flex w-full flex-col mb-3"><span
                    className="h-[1px] w-full bg-[rgba(211,216,228,1)]"></span>
                </div>
                <section className="py-2 px-4">
                    {new Array(10).fill(0).map((_, i) => {
                        return <div key={i} className="mb-8 w-full last:mb-6">
                            <article className="w-full p-0">
                                <div className="w-full">
                                    <div className="mb-6 flex w-full flex-col justify-between">
                                        <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center">
                                            <div className="w-full flex items-center">
                                                <TbUserPentagon color={"#000002"} size={24}/>
                                                <p className=" pt-0.5 font-medium text-primary-shade-1 whitespace-nowrap mr-3">مهرشاد
                                                    صادقی فر</p></div>
                                        </div>
                                        <div
                                            className="!mb-2.5 !mt-4 w-fit lg:!gap-0.5 flex flex-row-reverse gap-0.5 2md:gap-1 items-center mt-2 mb-2 ">
                                            <Rate percentage={80 + "%"}/>
                                        </div>
                                        <div className="w-full">
                                            <time className="leading-4 text-primary-tint-4">۱۴۰۳/۰۹/۱۲</time>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="674d9eec7a6ef8ed12251cb4"
                                             className="overflow-hidden text-ellipsis whitespace-pre-line text-base font-semiBold leading-[30px] text-[rgb(56,80,134)] lg:text-[17px]  line-clamp-3 max-h-[90px]">از
                                            همه نظر عالیه،ممنون از تکنولایف.
                                        </div>
                                    </div>

                                    <div className="response-comment">
                                        <div className="seller-response">
                                            پاسخ نزدیکه:
                                        </div>
                                        <div className="seller-description">
                                            سلام <br/>سپاس از اعتماد شما
                                        </div>
                                    </div>

                                    <div className="mt-7 flex w-full items-start justify-between !pb-8">
                                        <div className="flex items-center"><p
                                            className="ml-12 text-sm font-medium text-primary-tint-2">این نظر برای شما
                                            مفید بود ؟</p>
                                            <div
                                                className="min-w-10 ml-2.5 flex h-[22px] cursor-pointer items-center gap-2 rounded  py-0.5 pl-1 pr-2  border border-primary-tint-2">
                                                <span className="pt-0.5 font-semiBold text-primary-tint-2">0</span>
                                                <BiLike size={18} color={"#4e6393"}/>

                                            </div>
                                            <div
                                                className="min-w-10 flex h-[22px] cursor-pointer items-center gap-2 rounded  py-0.5 pl-1 pr-2  border border-primary-tint-2">
                                                <span className="pt-0.5 font-semiBold  text-primary-tint-2">0</span>
                                                <BiDislike size={18} color={"#4e6393"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="flex w-full flex-col"><span
                                className="h-[1px] w-full bg-[rgba(211,216,228,1)] "></span><span
                                className="mt-0.5 h-[1px] w-full bg-[rgba(211,216,228,1)] 2lg:mt-[3px] "></span></div>
                        </div>
                    })}
                </section>
            </ModalBody>
        </div>

    );
};

export default CommentsModal;