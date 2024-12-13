'use client'
import React from 'react';
import {FaStar} from "react-icons/fa";
import Image from "next/image";
import {RiErrorWarningLine} from "react-icons/ri";
import {FaAngleLeft} from "react-icons/fa6";
import {RiCheckboxBlankCircleFill} from "react-icons/ri";
import Selector from "@/app/product/[id]/_components/summary/featureTypes/selector";
import {productStore} from "@/state/product/product";
import {scrolltoHash} from "@/helpers/client";

const Content = ({product}: any) => {
    const {setActiveTab}=productStore()
    return (
        <div className="summary__content">
            <div className="rating_and_nummbercomment">
                <div className="flexed">
                    <div className="rating_product">
                        <FaStar size={11} color={"white"} className={"me-[4px]"}/>
                        <span className="average_rating mt-[3px]">{isNaN(+(product.ProductReviewOverview.RatingSum)/+(product.ProductReviewOverview.TotalReviews))?0:+(product.ProductReviewOverview.RatingSum)/+(product.ProductReviewOverview.TotalReviews)}</span>
                    </div>
                    <span className="rating_count"> از {product.ProductReviewOverview.RatingSum} رای </span>
                </div>
                <div className="comments_number">
                    <RiCheckboxBlankCircleFill color={"#e0e0e2"} size={5} className="me-[7px]"/>
                    <p><span>{product.ProductReviewOverview.TotalReviews}</span>دیدگاه</p>
                </div>

                <div className="comments_number">

                </div>

                {
                    product.ShowManufacturerPartNumber ? <div className="product_meta">
                        <span className="sku_wrapper">شناسه محصول: <span className="sku"
                                                                         data-o_content="apple-13pak#-1">{product.ManufacturerPartNumber}</span></span>
                    </div> : ""
                }

                {
                    product.ShowGtin ? <div className="product_meta">
                        <span className="sku_wrapper">پارت نامبر: <span className="sku"
                                                                        data-o_content="apple-13pak#-1">{product.Gtin}</span></span>
                    </div> : ""
                }

            </div>
            <div className="variations mt-3">

                {
                    product.ProductAttributes.map((attr, index) => {
                        return <div className={"types"} key={index}>
                            {attr.AttributeControlType === 40 || attr.AttributeControlType === 2 ? <Selector data={attr}/> : ""}
                        </div>
                    })
                }


                <div className="meta-additional mt-3">
                    <span className="atri-single ">ویژگی های محصول</span>
                    <ul className="!pb-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 w-full   lg:gap-2 mt-2 lg:grid lg:grid-cols-3
                    lg:overflow-hidden">
                        <li className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md">
                            <div className="flex flex-col gap-2 max-w-[150px]">
                                <div><p
                                    className="text-[#81858b] text-[12px]
                                     !leading-none lg:!leading-6 lg:break-all lg:overflow-hidden ellipsis-1">فناوری
                                    صفحه‌ نمایش</p><p
                                    className="text-[12px] !leading-none mt-2 lg:mt-0 lg:!leading-6 text-[#3f4064] break-all lg:overflow-hidden ellipsis-1">Super
                                    Retina XDR OLED</p></div>
                            </div>
                        </li>
                        <li className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md">
                            <div className="flex flex-col gap-2 max-w-[150px]">
                                <div><p
                                    className="text-[#81858b] text-[12px] !leading-none lg:!leading-6 lg:break-all lg:overflow-hidden ellipsis-1">نسخه
                                    سیستم عامل</p><p
                                    className="text-[12px] !leading-none mt-2 lg:mt-0 lg:!leading-6 text-[#3f4064] break-all lg:overflow-hidden ellipsis-1">iOS
                                    15</p></div>
                            </div>
                        </li>
                        <li className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md">
                            <div className="flex flex-col gap-2 max-w-[150px]">
                                <div><p
                                    className="text-[#81858b] text-[12px] !leading-none lg:!leading-6 lg:break-all lg:overflow-hidden ellipsis-1">رزولوشن
                                    دوربین اصلی</p><p
                                    className="text-[12px] !leading-none mt-2 lg:mt-0 lg:!leading-6 text-[#3f4064] break-all lg:overflow-hidden ellipsis-1">12
                                    مگاپیکسل</p></div>
                            </div>
                        </li>
                        <li className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md">
                            <div className="flex flex-col gap-2 max-w-[150px]">
                                <div><p
                                    className="text-[#81858b] text-[12px] !leading-none lg:!leading-6 lg:break-all lg:overflow-hidden ellipsis-1">اندازه</p>
                                    <p className="text-[12px] !leading-none mt-2 lg:mt-0 lg:!leading-6 text-[#3f4064] break-all lg:overflow-hidden ellipsis-1">6.1</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="all-features flex justify-center items-center gap-4 mt-4">
                    <hr/>
                    <span>
                        <div className="flex items-center justify-center relative grow" onClick={()=>{
                            scrolltoHash('tabs')
                            setActiveTab('tab-title-additional_information')
                        }}>مشاهده همه ویژگی‌ها
                            <div className="flex mr-2">
                                <FaAngleLeft size={11}/>
                            </div>
                        </div>
                    </span>
                    <hr/>
                </div>
                <div className="product_return">
                    <RiErrorWarningLine size={17} className={"me-[10px]"} color={"#81858b"}/>
                    <span>امکان برگشت کالا با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.</span>
                </div>
                <span className="hamta"><i className="exclamation-circle"><Image
                    src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png" width={30}
                    height={30} alt="date send"
                    data-lazy-src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png"
                    data-ll-status="loaded" className="entered lazyloaded"/><noscript><Image
                    width={30} height={30}
                    src=" https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png"
                    alt="date send"/></noscript></i><span
                    className="text-hamta">هشدار سامانه همتا: حتما در زمان تحویل دستگاه، به کمک کد فعال‌سازی چاپ شده روی جعبه یا کارت گارانتی، دستگاه را از طریق #7777*، برای سیم‌کارت خود فعال‌سازی کنید. آموزش تصویری در آدرس اینترنتی hmti.ir/05</span></span>
                <div className="special_send_box">

                    <div className="special_header">
                        <a href="#">
                            <img width="24" height="24"
                                 src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"
                                 alt="sendbox product"
                                 data-lazy-src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"
                                 data-ll-status="loaded" className="entered lazyloaded"/>
                            <noscript><img width="24" height="24"
                                           src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"
                                           alt="sendbox product"/></noscript>
                            <span>شرایط ارسال کالا <FaAngleLeft size={20} color={"#424750"}/></span>
                        </a>
                    </div>

                    <div className="special_content_box">
                        <ul>
                            <a href="# ">
                                <li>ارسال از انبار تهران: 1 الی 2 روز کاری</li>
                            </a>
                            <a href="# ">
                                <li>ارسال از انبار اصفهان: تحویل فوری</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;