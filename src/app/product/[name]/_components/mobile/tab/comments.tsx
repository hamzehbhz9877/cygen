'use client'

import React from 'react';
import {TbUserPentagon} from "react-icons/tb";
import Rate from "@/app/product/[name]/_components/tabs/comments/rate/rate";
import {BiDislike, BiLike} from "react-icons/bi";
import AddComment from "@/app/product/[name]/_components/tabs/comments/add/add";
import useModal from "@/context/modal/useModal";
import InfoModal from "@/app/product/[name]/_components/mobile/tab/modal/info";
import CommentsModal from "@/app/product/[name]/_components/mobile/tab/modal/comments";
import LogoLoader from "@/components/loading/logoLoader";
import {showToast} from "@/components/react-toastify/react-toastify";
import {getQueryClient} from "@/utils/get-query-client";
import {keepPreviousData, useMutation, useQuery} from "@tanstack/react-query";
import {AddHelpfulness, GetComments} from "@/services/product";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

type Props = {
    product:any
}
const Comments = ({product}: Props) => {

    const {openModal,closeModal}=useModal()

    const queryClient=getQueryClient();

    const {data} = useQuery({
        queryFn: async () => {
            const res = await GetComments(product.Id)
            return res.data.Items
        },
        queryKey: ['comments', product.Id],
        placeholderData: keepPreviousData,
        initialData: product.ProductReviews.Items,
    })

    const {mutate,isPending} = useMutation<any,any,any,any>({
        mutationFn: (data) => AddHelpfulness(data),
        onSuccess: (data) => {
            if (data.data.Message)
                showToast("error", data.data.Message)
            // @ts-ignore
            queryClient.invalidateQueries(['comments', product.Id])
        }
    })


    return (
        <div className="comments tabs-mobile-item" id={'comments-mobile'}>
            {isPending?
                <LogoLoader/>:""
            }
            <div className="tabs-mobile-item__title">
                <h4 className={"#232222"}>نظرات</h4>
                <a className="insert_comment_mobile" role={"button"}
                   onClick={() => openModal(<AddComment product={product} closeModal={closeModal}/>,{className:"!rounded-[0]"})}>افزودن
                    نظر جدید +</a>
            </div>

            <div className="tabs-mobile-item__content">
                <div id="comments">
                    {data?.length > 0 ? data.map((comment, index) => {
                        if (index===0)
                            return <div key={index} className="mb-8 w-full last:mb-6">
                                <article className="w-full p-0">
                                    <div className="w-full">
                                        <div className="mb-6 flex w-full flex-col justify-between">
                                            <div
                                                className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center">
                                                <div className="w-full flex items-center">
                                                    <TbUserPentagon color={"#000002"} size={24}/>
                                                    <p className=" pt-0.5 font-medium text-primary-shade-1 whitespace-nowrap mr-3">{comment.CustomerName}</p>
                                                </div>
                                            </div>
                                            <div
                                                className="!mb-2.5 !mt-4 w-fit lg:!gap-0.5 flex flex-row-reverse gap-0.5 2md:gap-1 items-center mt-2 mb-2 ">
                                                <Rate percentage={(comment.Rating * 20) + "%"}/>
                                            </div>
                                            <div className="w-full">
                                                <time
                                                    className="leading-4 text-primary-tint-4">{comment.WrittenOnStr}</time>
                                            </div>
                                        </div>
                                        <div>
                                            <div id="674d9eec7a6ef8ed12251cb4"
                                                 className="overflow-hidden text-ellipsis whitespace-pre-line text-base font-semiBold
                                                  leading-[30px] text-dynamic-color-from lg:text-[17px]  line-clamp-3 max-h-[90px]">{DOMPurify.sanitize(comment.ReviewText,{ FORCE_BODY: true,
                                                ADD_TAGS: ['script']})}</div>
                                        </div>
                                        {
                                            comment.ReplyText ?
                                                <div className="response-comment">
                                                    <div className="seller-response">
                                                        پاسخ {product.ShowVendor?product.VendorModel.Name : product.CurrentStoreName}:
                                                    </div>
                                                    <div className="seller-description">
                                                        سلام <br/>سپاس از اعتماد شما
                                                    </div>
                                                </div> : ""}
                                        <div className="mt-7 flex w-full items-start justify-between !pb-8">
                                            <div className="flex items-center"><p
                                                className="ml-12 text-sm font-medium text-primary-tint-2">این نظر برای
                                                شما
                                                مفید بود ؟</p>
                                                <div onClick={() => mutate({
                                                    id: comment.Helpfulness.ProductReviewId,
                                                    wasHelpful: true
                                                })}
                                                     className="min-w-10 ml-2.5 flex h-[22px] cursor-pointer items-center gap-2 rounded  py-0.5 pl-1 pr-2  border border-primary-tint-2">
                                                        <span
                                                            className="pt-0.5 font-semiBold text-primary-tint-2">{comment.Helpfulness.HelpfulYesTotal}</span>
                                                    <BiLike size={18} color={"#4e6393"}/>

                                                </div>
                                                <div onClick={() => mutate({
                                                    id: comment.Helpfulness.ProductReviewId,
                                                    wasHelpful: false
                                                })}
                                                     className="min-w-10 flex h-[22px] cursor-pointer items-center gap-2 rounded  py-0.5 pl-1 pr-2  border border-primary-tint-2">
                                                        <span
                                                            className="pt-0.5 font-semiBold  text-primary-tint-2">{comment.Helpfulness.HelpfulNoTotal}</span>
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
                        }) :
                        <p className="woocommerce-noreviews">هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
                    }
                </div>

                {data.length > 1 ?
                    <span data-remodal-target="mob_tab_reviews" role={"button"}
                          onClick={() => openModal(<CommentsModal product={product}
                                                                  closeModal={closeModal}/>, {className: "!rounded-[0]"})}
                          className="view_comment_mobiles">مشاهده همه {data.length} نظرات کاربران</span>:""
                }
            </div>


        </div>
    );
};

export default Comments;