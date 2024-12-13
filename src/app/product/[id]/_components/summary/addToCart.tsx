import React from 'react';
import {RiShieldCheckLine} from "react-icons/ri";
import {RiRefreshLine} from "react-icons/ri";
import Quantity from "@/app/product/[id]/_components/summary/quantity";
import {CiDeliveryTruck, CiShop} from "react-icons/ci";

const AddToCart = ({product}) => {
    return (
        <div className="summary__cart">
            <div className="full_whidth ui-box">
                <div className="timeline-item">

                    <div className="animated-background main_preload">
                        <div className="background-masker header-top"></div>
                    </div>

                    <div className="animated-background foot_preload">
                        <div className="background-masker header-top"></div>
                    </div>

                </div>

                <script>

                </script>
                <div className="product-seller-info">
                    <div className="seller-info-changeable">


                        <div className="product-seller-row seller_name">

                            <div className="product-seller-row-icon">
                                <CiShop size={25}/>
                            </div>

                            <div id="myButton_stills" className="product-seller-row-detail" aria-expanded="false">

                                <div className="product-seller-name ">
                                   <span> فروشنده: </span>
                                    {product.ShowVendor?product.VendoreModel.Name:product.CurrentStoreName}
                                </div>

                                {/*<span className="good-seller">منتخب</span>*/}

                            </div>
                        </div>


                        <div className="product-seller-row">

                            <div className="product-seller-row-icon">
                                <CiDeliveryTruck  size={25}/>
                            </div>

                            <div className="product-seller-row-detail">
                                <a data-remodal-target="send_modal" className="cursor">

                                    <div className="product-seller-row-detail-title  send-seller">
                                        <i className="chevrons-right"></i>
                                    </div>
                                </a>
                                <ul>
                                    <li className="pluses">زمان آماده سازی:</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="back_holder">

                    <div className="old-price">
                        <div className="old-price__value">
                            <del>
                                <bdi>57,450,000&nbsp;</bdi>
                            </del>
                        </div>
                        <div className="discount">%<p>4</p></div>
                    </div>

                    <div className='price'>
                        <bdi>57,450,000&nbsp;<span>تومان</span></bdi>
                    </div>
                    {/*<span className="update-price">بروزرسانی قیمت:		<span*/}
                    {/*    className="product-update-date">8 آذر 1403</span></span>*/}
                    <div className="add-to-cart">
                        <Quantity/>
                        <button type="submit" className="button">

                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddToCart;