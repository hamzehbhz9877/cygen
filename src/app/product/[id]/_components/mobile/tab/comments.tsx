'use client'

import React from 'react';
import {TbUserPentagon} from "react-icons/tb";
import Rate from "@/app/product/[id]/_components/tabs/comments/rate/rate";
import {BiDislike, BiLike} from "react-icons/bi";
import AddComment from "@/app/product/[id]/_components/tabs/comments/add/add";
import useModal from "@/context/modal/useModal";
import InfoModal from "@/app/product/[id]/_components/mobile/tab/modal/info";
import CommentsModal from "@/app/product/[id]/_components/mobile/tab/modal/comments";

type Props = {
    id: any
}
const Comments = ({id}: Props) => {

    const {openModal,closeModal}=useModal()
    return (
        <div className="comments tabs-mobile-item">
            <div className="tabs-mobile-item__title">
                <h4 className={"#232222"}>نظرات</h4>
                <a className="insert_comment_mobile" role={"button"}
                   onClick={() => openModal(<AddComment closeModal={closeModal}/>,{className:"!rounded-[0]"})}>افزودن
                    نظر جدید +</a>
            </div>

            <div className="tabs-mobile-item__content">
                <div className="mb-8 w-full last:mb-6">
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

                            <div className="mt-7 flex w-full items-start justify-between">
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
                </div>
                <span data-remodal-target="mob_tab_reviews" role={"button"} onClick={()=>openModal(<CommentsModal closeModal={closeModal}/>,{className:"!rounded-[0]"})}
                      className="view_comment_mobiles">مشاهده همه 1 نظرات کاربران</span>
            </div>


        </div>
    );
};

export default Comments;