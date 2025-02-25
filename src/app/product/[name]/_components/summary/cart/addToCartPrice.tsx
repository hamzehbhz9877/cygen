import React from 'react';
import {CiDeliveryTruck, CiShop} from "react-icons/ci";
import {LiaShippingFastSolid} from "react-icons/lia";
import {productStore} from "@/state/product/product";
import AddToCart from "@/app/product/[name]/_components/summary/cart/addToCart";

const AddToCartPrice = ({product}) => {

    const {changeAttributes} = productStore(d => d)

    return (
        <div>
            <div className="product-seller-info">
                <div className="seller-info-changeable">
                    <div className="product-seller-row seller_name">
                        <div className="product-seller-row-icon">
                            <CiShop size={25}/>
                        </div>
                        <div id="myButton_stills" className="product-seller-row-detail" aria-expanded="false">
                            <div className="product-seller-name ">
                                <span> فروشنده: </span>
                                {product.ShowVendor ? product.VendorModel.Name : product.CurrentStoreName}
                            </div>
                            {/*<span className="good-seller">منتخب</span>*/}
                        </div>
                    </div>
                    {
                        product.IsShipEnabled === true ?
                            <>
                                {product.DeliveryDate ?

                                    <div className="product-seller-row">

                                        <div className="product-seller-row-icon">
                                            <CiDeliveryTruck size={25}/>
                                        </div>

                                        <div className="product-seller-row-detail">
                                            <a data-remodal-target="send_modal" className="cursor">
                                                <div className="product-seller-row-detail-title  send-seller">
                                                    <i className="chevrons-right"></i>
                                                </div>
                                            </a>
                                            <ul>
                                                {/*{product.AvailableEndDate ?*/}
                                                {/*    <li className="pluses">{product.AvailableEndDate}</li> :*/}
                                                {/*    <li className="pluses">زمان آماده سازی: {product.DeliveryDate}</li>*/}
                                                {/*}*/}
                                                <li className="pluses">زمان آماده سازی: {product.DeliveryDate}</li>
                                            </ul>
                                        </div>
                                    </div> : <div className="product-seller-row">
                                        <div className="product-seller-row-icon">
                                            <CiDeliveryTruck size={25}/>
                                        </div>
                                        <div className="product-seller-row-detail">
                                            <a data-remodal-target="send_modal" className="cursor">
                                                <div className="product-seller-row-detail-title  send-seller">
                                                    <i className="chevrons-right"></i>
                                                </div>
                                            </a>
                                            <ul>
                                                <li className="pluses">زمان آماده سازی: آماده ارسال</li>
                                            </ul>
                                        </div>
                                    </div>}

                                {changeAttributes?.isFreeShipping ?? product.IsFreeShipping ?
                                    <div className="product-seller-row">

                                        <div className="product-seller-row-icon">
                                            <LiaShippingFastSolid color={"#e6123d"} size={25}/>
                                        </div>

                                        <div className="product-seller-row-detail">
                                            <a data-remodal-target="send_modal" className="cursor">
                                                <div className="product-seller-row-detail-title  send-seller">
                                                    <i className="chevrons-right"></i>
                                                </div>
                                            </a>
                                            <ul>
                                                <li className="pluses">ارسال رایگان</li>
                                            </ul>
                                        </div>

                                    </div> : ""}

                            </> : ""
                    }
                </div>
            </div>
            <div className="back_holder">
                <AddToCart product={product}/>
            </div>
        </div>
    )
        ;
};

export default AddToCartPrice;