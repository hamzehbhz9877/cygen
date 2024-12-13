import React from 'react';
import {LiaCommentSolid} from "react-icons/lia";
import Rate from "@/app/product/[id]/_components/tabs/comments/rate/rate";
import {BiLike, BiDislike} from "react-icons/bi";
import {TbUserPentagon} from "react-icons/tb";
import useModal from "@/context/modal/useModal";
import AddComment from "@/app/product/[id]/_components/tabs/comments/add/add";
import RateReview from "@/app/product/[id]/_components/tabs/comments/rate/review";

const Comments = ({comments}: any) => {

    const {openModal, closeModal} = useModal()

    return (
        <div className={"comments"}>
            <div
                className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                role="tabpanel" aria-labelledby="tab-title-reviews" id="tab-reviews">

                <div className="reviw-tabs">

                    <div className="panel-pad">

                        <div className="title-commenter">
                            <h2 className="title">امتیاز کاربران به:</h2>
                            <div className="counter pt-[10px]">

                                <span
                                    className="title-desktop">آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active</span>

                                <span className="countes">(0نفر)</span>
                            </div>
                        </div>


                        <div className="continer-rating flex justify-between items-center">
                            <div className="go-insert-comment">
                                <span className="title-insert">دیدگاه خود را در باره این کالا بیان کنید</span>
                                <span className="dec-insert">
						برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این محصول را قبلا از این فروشگاه خریده باشید، نظر شما به عنوان مالک محصول ثبت خواهد شد.					</span>
                                <button rel="nofollow" className={"relative"} onClick={() => openModal(<AddComment
                                    closeModal={closeModal}/>, {className: "!w-[550px]"})}>
                                    <LiaCommentSolid className={"absolute top-1/2 -translate-y-1/2 right-[15px]"}
                                                     size={35}/>
                                    افزودن
                                    دیدگاه
                                </button>

                            </div>

                            <RateReview/>

                        </div>

                    </div>

                    <span className="commnet-lister">نظرات کاربران</span>
                    <div id="comments">
                        {new Array(3).fill(0).map((comment, index) => {
                            return <div key={index} className="mb-8 w-full last:mb-6">
                                <article className="w-full p-0">
                                    <div className="w-full px-8">
                                        <div className="mb-6 flex w-full flex-col justify-between">
                                            <div
                                                className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center">
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
                                        <div className="mt-7 flex w-full items-start justify-between !pb-8">
                                            <div className="flex items-center"><p
                                                className="ml-12 text-sm font-medium text-primary-tint-2">این نظر برای
                                                شما
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
                                    className="mt-0.5 h-[1px] w-full bg-[rgba(211,216,228,1)] 2lg:mt-[3px] "></span>
                                </div>
                            </div>
                        })}
                        {/*<p className="woocommerce-noreviews">هیچ دیدگاهی برای این محصول نوشته نشده است.</p>*/}
                    </div>


                    <div className="clear"></div>

                </div>
            </div>
        </div>
    );
};

export default Comments;