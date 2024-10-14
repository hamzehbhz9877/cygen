import React from 'react';
import Image from "next/image";
import Link from "next/link";


// css
import "./index.scss"

const Product = () => {
    return (
        <div className="product">
            <div className="product-box-inner">
                <div className="info-product">

                    <Link
                        href="https://pars.parskalas.com/product/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%a7%d9%be%d9%84-%d9%85%d8%af%d9%84-iphone-13-pro-max-a2644-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7%d8%b1%d8%aa-%d8%b8/"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <div className="prk-archive-swatches">
                            <div className="prk-archive-swatch prk-swatch-with-bg">
                                <span className="tooltiptext">طلایی</span></div>
                            <div className="prk-archive-swatch prk-swatch-with-bg">
                                <span className="tooltiptext">بنفش</span></div>
                            <div className="prk-archive-swatch prk-swatch-with-bg">
                                <span className="tooltiptext">سبز</span></div>
                            <div className="prk_swatches-divider">+1</div>
                            <div className="prk-archive-swatch prk-hidden prk-swatch-with-bg"><span
                                className="tooltiptext">سرمه ایی</span>
                            </div>
                        </div>
                        <div className="head-archie-pro"><span className="onsale prs">پیشنهاد ویژه</span>
                            <p
                                id="sales_timer_display" className="timer-pros1-6zs1y"><span><span
                                className="number">0</span><span className="dot">:</span></span><span><span
                                className="number">0</span><span
                                className="dot">:</span></span><span><span
                                className="number">0</span><span className="dot">:</span></span><span><span
                                className="number">0</span></span></p>
                        </div>
                        <div
                            className="thumb-pro hover-image  duration-500  group-hover:-mt-[22px] group-hover:-rotate-1">
                            <Image fetchPriority="high" width="300" height="300"
                                   src="https://pars.parskalas.com/wp-content/uploads/2022/11/iphone-12-white-select-2020-866x1024-1-300x300.png"
                                   className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                                   alt="" decoding="async"
                            />
                            <Image width="300" height="300"
                                 src="https://pars.parskalas.com/wp-content/uploads/2022/07/73409683bedd334608bd3aff7c048fcddc3094ed_1653804755-300x300.jpg"
                                 alt="آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active"
                                 className=" second-img wp-post-image"/>
                        </div>
                    </Link>
                    <div className="index-title-pro archive"><a
                        href="https://pars.parskalas.com/product/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%a7%d9%be%d9%84-%d9%85%d8%af%d9%84-iphone-13-pro-max-a2644-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7%d8%b1%d8%aa-%d8%b8/"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a><h2
                        className="woocommerce-loop-product_title"><a
                        href="https://pars.parskalas.com/product/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%a7%d9%be%d9%84-%d9%85%d8%af%d9%84-iphone-13-pro-max-a2644-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7%d8%b1%d8%aa-%d8%b8/"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a><a
                        href="https://pars.parskalas.com/product/%da%af%d9%88%d8%b4%db%8c-%d9%85%d9%88%d8%a8%d8%a7%db%8c%d9%84-%d8%a7%d9%be%d9%84-%d9%85%d8%af%d9%84-iphone-13-pro-max-a2644-%d8%af%d9%88-%d8%b3%db%8c%d9%85-%da%a9%d8%a7%d8%b1%d8%aa-%d8%b8/">آیفون
                        13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active</a></h2></div>


                    <div className="flex-1"/>
                    <div className="index-prices-pro">
                        <div className="price_onsale_ar">
                            <del><span className="index-discount-pro">٪<p>4</p></span><span
                                className="woocommerce-Price-amount amount price_sale"><bdi><bdi>53,450,000&nbsp;
                                <span className="woocommerce-Price-currencySymbol">تومان</span></bdi></bdi></span>
                            </del>
                            <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>51,450,000&nbsp;
                                <span className="woocommerce-Price-currencySymbol">تومان</span></bdi></span></ins>
                        </div>
                    </div>
                </div>

                <span className="product__label">
                    جدید
                </span>

            </div>
        </div>
    );
};

export default Product;