import React from 'react';
import Rate from "@/app/product/[name]/_components/tabs/comments/rate/rate";
import {averReview, computeRate} from "@/helpers/client";

const RateReview = ({product, comments}) => {


    return (
        <div
            className="rate-review flex w-full items-end justify-end gap-3 2md:pb-1 2lg:pb-0 xl:gap-6 2xl:w-80 2xl:gap-10 3xl:w-[376px] pt-2.5">
            <div className="flex flex-col-reverse items-start gap-3 ">
                {[1,2,3,4,5].map(i=>{
                    return (
                        <div key={i} className="flex justify-between items-center gap-3 lg:gap-2 ">
                            <div
                                className="relative min-w-[184px] sxs:min-w-[225px] xs:min-w-[315px] sm:min-w-[440px] md:min-w-[220px] h-2 2md:min-w-[98px]  2lg:min-w-[170px] 2xl:min-w-[156px] 3xl:min-w-[213px] 2md:h-2.5 bg-[rgb(233,236,242,1)] top-0 right-0 rounded-lg ">
                                            <span
                                                className="absolute inline-block bg-dynamic-color-from h-full rounded-lg lg:rounded-full"
                                                style={{width: (computeRate(i,comments) / comments.length) + "%"}}></span></div>
                            <span
                                className="flex w-2 lg:w-2.5 h-2 justify-end items-center text-xss  lg:text-base lg:leading-3 font-medium text-[rgb(145,158,188,1)]">{i}</span>
                        </div>
                    )
                })}
            </div>
            <div className="-mt-1.5 flex flex-col items-end text-primary-shade-1 ">
                <div className="relative"><span><strong
                    className="mb-3 flex cursor-pointer text-5xl text-dynamic-color-from">{averReview(product)}</strong></span>
                    <div
                        className="invisible absolute z-10 w-max rounded-full bg-white px-4 pb-1 pt-1.5 opacity-0 shadow-525 transition-all delay-0"
                        style={{bottom: '-19px', left: "-9px"}}><span
                        className="whitespace-nowrap text-sm font-medium leading-5.5 text-primary-shade-1">نمره کالا از دید کاربران</span>
                    </div>
                </div>
                <span
                    className="ml-0.5 block text-base font-semiBold leading-4 ">{product.ProductReviewOverview?.TotalReviews} نظر </span>
                <div className={"!mb-0 flex flex-row-reverse gap-0.5 2md:gap-1 items-center mt-2 mb-2 "}>
                    <Rate percentage={averReview(product) * 20 + "%"}/>
                </div>
            </div>
        </div>
    );
};

export default RateReview;