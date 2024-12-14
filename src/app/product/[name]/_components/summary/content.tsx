'use client'

import React from 'react';
import Selector from "@/app/product/[name]/_components/summary/featureTypes/selector";
import {productStore} from "@/state/product/product";
import TirePrice from "@/app/product/[name]/_components/summary/featureTypes/tireprice";
import Specification from "@/app/product/[name]/_components/summary/specefication";
import Rating from "@/app/product/[name]/_components/summary/rating";
import DropdownList from "@/app/product/[name]/_components/summary/featureTypes/dropdown";
import ImageSquare from "@/app/product/[name]/_components/summary/featureTypes/imageSqure";

const Content = ({product}: any) => {
    const {setActiveTab} = productStore()
    return (
        <div className="summary__content">
            <Rating product={product} setActiveTab={setActiveTab}/>

            <div className="variations mt-3">
                {
                    product.ProductPrice.DisableBuyButton ? "" :
                        product.ProductAttributes.map((attr, index) => {
                            return <div className={"types"} key={index}>
                                {attr.AttributeControlType === 40 || attr.AttributeControlType === 2 ?
                                    <Selector data={attr}/> : ""}
                                {attr.AttributeControlType === 1?
                                    <DropdownList data={attr}/>:""
                                }
                                {attr.AttributeControlType === 45?
                                    <ImageSquare data={attr}/>:""
                                }
                            </div>
                        })
                }

                {product.TierPrices.length > 0 ? <TirePrice product={product}/> : ""}


                <Specification product={product} setActiveTab={setActiveTab}/>


                {/*<div className="product_return">*/}
                {/*    <RiErrorWarningLine size={17} className={"me-[10px]"} color={"#81858b"}/>*/}
                {/*    <span>امکان برگشت کالا با دلیل انصراف از خرید تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.</span>*/}
                {/*</div>*/}
                {/*<span className="hamta"><i className="exclamation-circle"><Image*/}
                {/*    src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png" width={30}*/}
                {/*    height={30} alt="date send"*/}
                {/*    data-lazy-src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png"*/}
                {/*    data-ll-status="loaded" className="entered lazyloaded"/><noscript><Image*/}
                {/*    width={30} height={30}*/}
                {/*    src=" https://pars.parskalas.com/wp-content/themes/parskala/assets/img/point.png"*/}
                {/*    alt="date send"/></noscript></i><span*/}
                {/*    className="text-hamta">هشدار سامانه همتا: حتما در زمان تحویل دستگاه، به کمک کد فعال‌سازی چاپ شده روی جعبه یا کارت گارانتی، دستگاه را از طریق #7777*، برای سیم‌کارت خود فعال‌سازی کنید. آموزش تصویری در آدرس اینترنتی hmti.ir/05</span></span>*/}
                {/*<div className="special_send_box">*/}

                {/*    <div className="special_header">*/}
                {/*        <a href="#">*/}
                {/*            <img width="24" height="24"*/}
                {/*                 src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"*/}
                {/*                 alt="sendbox product"*/}
                {/*                 data-lazy-src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"*/}
                {/*                 data-ll-status="loaded" className="entered lazyloaded"/>*/}
                {/*            <noscript><img width="24" height="24"*/}
                {/*                           src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/plus-icon.svg"*/}
                {/*                           alt="sendbox product"/></noscript>*/}
                {/*            <span>شرایط ارسال کالا <FaAngleLeft size={20} color={"#424750"}/></span>*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*    <div className="special_content_box">*/}
                {/*        <ul>*/}
                {/*            <a href="# ">*/}
                {/*                <li>ارسال از انبار تهران: 1 الی 2 روز کاری</li>*/}
                {/*            </a>*/}
                {/*            <a href="# ">*/}
                {/*                <li>ارسال از انبار اصفهان: تحویل فوری</li>*/}
                {/*            </a>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Content;